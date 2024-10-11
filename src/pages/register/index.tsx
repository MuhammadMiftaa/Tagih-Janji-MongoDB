import { LinkPreview } from "@/src/components/ui/link-preview";
import React from "react";
import { MdLock } from "react-icons/md";
import { RxPencil2 } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[url(/login-bg.png)] flex">
      <div
        className="relative p-8 items-center flex flex-col rounded-3xl mx-auto my-auto w-fit bg-gradient-to-b from-pink-200 to-white via-white to-80% "
        style={{ boxShadow: "0 0 8px #fff" }}
      >
        <Link
          href={"/"}
          className="absolute top-4 right-4 text-gray-500 text-xl"
        >
          <IoClose />
        </Link>
        <div className="text-2xl p-4 rounded-2xl bg-zinc-100 aspect-square shadow-xl">
          <RxPencil2 />
        </div>
        <div className="font-poppins flex flex-col items-center mt-4">
          <h1 className="text-2xl font-semibold text-center">
            Daftar dengan Email
          </h1>
          <h2 className="text-center font-light text-[0.8rem] w-96 text-zinc-700">
            Daftar untuk mengakses halaman promissum dan ikut menyuarakan hak
            kita. Tagih janji mereka!
          </h2>
        </div>

        <form className="w-full mx-auto mt-7 flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="relative w-full font-lora">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-500">
                <FaUser />
              </div>
              <input
                type="text"
                id="first-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cust-red focus:border-cust-red active:ring-cust-red active:border-cust-red block w-full ps-10 p-2.5"
                placeholder="Nama Depan"
                name="first-name"
              />
            </div>
            <div className="relative w-full font-lora">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-500">
                <FaUser />
              </div>
              <input
                type="text"
                id="last-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cust-red focus:border-cust-red active:ring-cust-red active:border-cust-red block w-full ps-10 p-2.5"
                placeholder="Nama Belakang"
                name="last-name"
              />
            </div>
          </div>
          <div className="relative w-full font-lora">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="email"
              id="email-address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cust-red focus:border-cust-red active:ring-cust-red active:border-cust-red block w-full ps-10 p-2.5"
              placeholder="Email"
              name="email-address"
            />
          </div>
          <div className="relative w-full font-lora">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-500 text-xl -ml-0.5">
              <MdLock />
            </div>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cust-red focus:border-cust-red active:ring-cust-red active:border-cust-red block w-full ps-10 p-2.5"
              placeholder="Kata Sandi"
              name="password"
            />
          </div>
          <div className="relative w-full font-lora">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-500 text-xl -ml-0.5">
              <MdLock />
            </div>
            <input
              type="password"
              id="confirm-password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cust-red focus:border-cust-red active:ring-cust-red active:border-cust-red block w-full ps-10 p-2.5"
              placeholder="Konfirmasi Kata Sandi"
              name="confirm-password"
            />
          </div>
          <button
            type="button"
            className="text-white font-poppins mt-5 bg-gradient-to-br from-pink-500 via-red-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center"
          >
            Mulai Sekarang
          </button>
          <p className="font-poppins text-[0.8rem] font-light text-zinc-400 text-center">
            Sudah punya akun?{" "}
            <LinkPreview
              imageSrc="/login.png"
              isStatic={true}
              url="/login"
              className="font-semibold text-black"
            >
              Masuk
            </LinkPreview>{" "}
            di sini.
          </p>
        </form>
      </div>
    </div>
  );
}
