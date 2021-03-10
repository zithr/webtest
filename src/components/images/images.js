import React from "react"

export const images = {
    plussign: (
        <svg
            width="16"
            height="16"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current text-purple-600 stroke-1"
        >
            <path
                d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                stroke-miterlimit="10"
            />
            <path d="M11 16H21" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 11V21" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    ),
    xsign: (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current text-red-400 stroke-2"
            data-tip="Remove image"
        >
            <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="black"
            />
        </svg>
    ),
    circleplus: (
        <svg
            width="16"
            height="16"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current text-purple-600 stroke-1"
        >
            <path
                d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                stroke-miterlimit="10"
            />
            <path d="M11 16H21" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 11V21" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    ),
    uploadicon: (
        <svg
            class="w-6 h-6"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
    ),
}
