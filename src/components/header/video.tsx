"use client";
import { IReduxSlice, closeModal } from "@/store/slice/slice";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export default function VideoModal() {
  const modal = useSelector((state: { click: IReduxSlice }) => state.click);
  const dispatch = useDispatch();

  return (
    <Dialog
      open={modal.isModal}
      onClose={() => dispatch(closeModal())}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black opacity-90"
      />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex h-screen justify-center items-center p-[5%]">
          <DialogPanel
            transition
            className="relative overflow-hidden rounded-lg w-screen max-w-2xl"
          >
            <iframe
              className="w-full h-72 md:h-96 rounded-lg"
              src="https://www.youtube.com/embed/Tr0dWseqmwk?si=sfTDJWcaxN2TSqTz"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
