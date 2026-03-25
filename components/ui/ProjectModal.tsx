"use client";

import { useEffect, useRef, useState } from "react";
import { Project } from "@/data/projects";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // trigger enter animation
  useEffect(() => {
    requestAnimationFrame(() => setIsOpen(true));
  }, []);

  // focus management
  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement;

    const focusableSelectors = [
      "a[href]",
      "button",
      "textarea",
      "input",
      "select",
      "[tabindex]:not([tabindex='-1'])",
    ].join(",");

    const modal = modalRef.current;
    if (!modal) return;

    const focusable = modal.querySelectorAll<HTMLElement>(focusableSelectors);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
      }

      if (e.key === "Tab" && focusable.length > 0) {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus();
    };
  }, []);

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // exit animation handler
  function handleClose() {
    setIsOpen(false);
    setTimeout(onClose, 300); // match transition duration
  }

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300 ${isOpen ? "bg-black/70 opacity-100" : "bg-black/0 opacity-0"
        }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className={`custom-scrollbar border border-sky-300/20 bg-radial-[at_50%_0%] from-sky-950 from-50% to-primary-1050 to-100%
          max-w-3xl w-full p-6 rounded-xl overflow-y-auto max-h-[90vh] mx-4
          transform transition-all duration-300 ease-out
          ${isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
          }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button onClick={handleClose} className="mb-4 hover:cursor-pointer">
            <XMarkIcon className="h-6 w-6 text-white hover:text-sky-300 transition duration-300 ease-in-out" />
          </button>
        </div>

        <img
          src={project.heroImage}
          alt="project hero image"
          className="mb-4"
        />

        <h2 id="modal-title" className="text-2xl font-bold">
          {project.title}
        </h2>

        <hr className="mb-4" />

        <p className="mb-4">{project.longDescription}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs border px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          {project.images.map((img) => (
            <img key={img} src={img} className="rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
