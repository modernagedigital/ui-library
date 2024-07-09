import { FC } from "react";
import classNames from "classnames";
import { LogoProps } from "./types.logo";

export const Logo_Fasenra: FC<LogoProps> = ({
  className,
  children,
  ...props
}) => {
  const componentClasses = classNames("logo_fasenra", className, {});

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 169 44"
      className={componentClasses}
      {...props}
    >
      <path
        fill="#00B398"
        d="M12.5 3.77a2.97 2.97 0 1 1-5.94 0 2.97 2.97 0 0 1 5.94 0Z"
      />
      <path
        fill="#AE2573"
        fillRule="evenodd"
        d="M37.56 10.64c-2.27 2.75-6.04 5.64-10.68 7.97-8.83 4.43-17.45 5.1-19.25 1.5-.7-1.38-.28-3.2 1.01-5.18-4.1 1.82-6.54 3.88-6.22 5.62.57 3.16 9.94 4.11 20.93 2.13 11-1.99 19.45-6.16 18.88-9.32-.24-1.3-1.96-2.22-4.67-2.72Zm-1.36-.21c-1.98 2.53-5.43 5.23-9.71 7.38-7.82 3.92-15.45 4.51-17.05 1.33-.67-1.33-.17-3.12 1.2-5.03a61.12 61.12 0 0 1 10.65-2.87c5.76-1.04 11.07-1.28 14.9-.8Zm.6-.84c-4.18-.36-9.7-.05-15.63 1.02a72.23 72.23 0 0 0-9.67 2.42c2.03-2.35 5.27-4.79 9.2-6.76 7.82-3.93 15.45-4.52 17.05-1.34.62 1.25.23 2.9-.94 4.66Zm1.44.16c1.56-2.16 2.11-4.17 1.36-5.68-1.8-3.6-10.43-2.93-19.26 1.5-4.73 2.38-8.55 5.35-10.81 8.15-6.09 2.26-9.91 5.03-9.5 7.32.64 3.55 11.13 4.6 23.45 2.38 12.3-2.23 21.77-6.9 21.13-10.43-.3-1.63-2.68-2.74-6.37-3.24Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#a)"
        d="M19.89 17.3c4.72-2.12 3.92-2.34 4.02-2.49.09-.11.58-.78.52-.46-.37 1.44-3.5 3.12-6.47 4.41-4.46 1.94-8.47 2.26-10.05.99-.72-.58 1.98-4.61 1.53-3.44-1.32 3.38 6.71 2.67 10.45 1Z"
      />
      <path
        fill="#00B398"
        d="M24.43 13.92c-.25-1.03-2.4-1.38-4.79-.8-2.39.58-4.12 1.88-3.86 2.9.25 1.03 2.4 1.4 4.78.81 2.4-.58 4.13-1.88 3.87-2.9Zm-3.96 2.54c-1.9.46-3.59.18-3.79-.63-.2-.8 1.18-1.83 3.07-2.3 1.9-.45 3.6-.17 3.79.63.2.8-1.18 1.84-3.07 2.3Z"
      />
      <path
        fill="#333F48"
        d="M53.41 29.7a14.28 14.28 0 0 0 0 13.72H52.4a12.1 12.1 0 0 1-1.86-6.86c-.07-2.42.58-4.8 1.86-6.86h1.01Z"
      />
      <path
        fill="#333F48"
        fillRule="evenodd"
        d="M54.68 40.92c.03-.48.05-1.08.05-1.49V29.7h1.3v4.48h.04a1.83 1.83 0 0 1 1.73-1.1c1.26 0 2.23 1.47 2.23 4.14 0 2.96-1.22 4.31-2.49 4.31a1.71 1.71 0 0 1-1.62-1.2h-.05l-.08 1.07h-1.13l.02-.48Zm1.35-2.41c0 .17 0 .34.05.5.3 1.22.87 1.44 1.22 1.44 1.05 0 1.42-1.42 1.42-3.16 0-1.64-.39-3.1-1.44-3.1-.6 0-1.11.77-1.21 1.46-.03.2-.04.39-.04.58v2.28Zm8.32 1.96c-.95 0-1.93-.54-1.94-3.05h3.8c.02-.2.02-.41.02-.72 0-1.86-.66-3.62-2.34-3.62-1.64 0-2.75 1.66-2.75 4.31 0 2.5 1.01 4.1 2.97 4.1.62.02 1.24-.11 1.8-.38l-.2-.96a2.8 2.8 0 0 1-1.36.32Zm-.6-6.38c.63 0 1.26.73 1.23 2.37h-2.56c.05-1.12.5-2.37 1.34-2.37Z"
        clipRule="evenodd"
      />
      <path
        fill="#333F48"
        d="M67.63 35.33c0-.62-.02-1.04-.04-1.44l-.03-.68h1.13l.07.98h.04a2.08 2.08 0 0 1 1.87-1.11c1.14 0 1.98.84 1.98 2.82v5.5h-1.3v-5.28c0-.96-.19-1.94-1.14-1.94-.54 0-1.06.45-1.23 1.33-.04.24-.05.49-.05.73v5.16h-1.3v-6.07Zm6.79-1.42c.02.46.04.97.04 1.42v6.06h1.3v-4.53a6 6 0 0 1 .05-.74 1.77 1.77 0 0 1 1.58-1.7l.26.01V33.1l-.12-.01-.14-.01a2 2 0 0 0-1.73 1.42h-.04l-.07-1.29H74.4l.03.7Z"
      />
      <path
        fill="#333F48"
        fillRule="evenodd"
        d="m81.8 41.4-.09-.87h-.05a1.84 1.84 0 0 1-1.62 1c-1.1 0-1.94-.93-1.94-2.33 0-2.05 1.64-2.96 3.48-2.98v-.25c0-1.1-.27-1.86-1.3-1.86-.49 0-.96.15-1.36.42l-.28-.91a3.52 3.52 0 0 1 1.9-.54c1.65 0 2.36 1.08 2.36 2.92v3.54c-.02.62 0 1.24.08 1.86h-1.19Zm-.2-4.23c-.67 0-2.24.12-2.24 1.9 0 1.06.54 1.45 1 1.45.57 0 1.06-.43 1.21-1.24.03-.15.04-.3.04-.45v-1.66Z"
        clipRule="evenodd"
      />
      <path
        fill="#333F48"
        d="M86.02 29.7h-1.3v11.7h1.3V29.7Zm3.33 1.4a.76.76 0 0 1-.8.85.77.77 0 0 1-.73-.85.78.78 0 0 1 1.07-.78.77.77 0 0 1 .46.78Zm-1.4 10.3v-8.2h1.3v8.19h-1.3ZM93 35.55l-2.58 5.05v.8h4.68v-1.08h-3.21v-.04l.34-.63.32-.58 2.55-4.99v-.86h-4.36v1.08h2.92v.03l-.34.63-.32.59Zm8.25 3.61c0 .62.03 1.14.05 1.6l.02.64h-1.13l-.08-.87h-.04a2.15 2.15 0 0 1-1.76 1c-1.44 0-2-1.12-2-3.14V33.2h1.3v5c0 1.28.2 2.22 1.1 2.22a1.26 1.26 0 0 0 1.17-1.08c.05-.24.07-.5.07-.74v-5.4h1.3v5.95Zm1.78-5.26c.02.4.05.82.05 1.43v6.06h1.28v-5.2c0-.23.02-.47.05-.7.16-.86.7-1.32 1.22-1.32.96 0 1.13.95 1.13 1.86v5.36h1.29v-5.26c0-.24.01-.5.05-.74.19-.76.66-1.22 1.2-1.22 1 0 1.15 1.04 1.15 2.1v5.12h1.29v-5.42c0-2.08-.87-2.9-1.96-2.9-.4 0-.8.1-1.14.33a2.6 2.6 0 0 0-.8.93h-.04a1.71 1.71 0 0 0-1.71-1.25 2.05 2.05 0 0 0-1.84 1.15h-.04l-.06-1.02H103l.02.69Z"
      />
      <path
        fill="#333F48"
        fillRule="evenodd"
        d="m116.79 41.4-.09-.87h-.05a1.84 1.84 0 0 1-1.62 1c-1.1 0-1.94-.93-1.94-2.33 0-2.05 1.64-2.96 3.48-2.98v-.25c0-1.1-.27-1.86-1.3-1.86-.48 0-.95.15-1.35.42l-.3-.91a3.52 3.52 0 0 1 1.92-.54c1.64 0 2.35 1.08 2.35 2.92v3.54c-.02.62 0 1.24.08 1.86h-1.18Zm-.19-4.23c-.67 0-2.25.12-2.25 1.9 0 1.06.54 1.45 1 1.45.58 0 1.06-.43 1.22-1.24.03-.15.04-.3.03-.45v-1.66Zm3.04 3.75-.02.48h1.13l.08-1.07h.05a1.71 1.71 0 0 0 1.62 1.2c1.27 0 2.49-1.35 2.49-4.31 0-2.67-.96-4.14-2.23-4.14a1.83 1.83 0 0 0-1.73 1.1H121V29.7h-1.3v9.73c0 .41-.03 1.01-.06 1.49Zm1.4-1.9a1.55 1.55 0 0 1-.05-.51v-2.28c0-.2.01-.39.04-.58.1-.7.6-1.45 1.22-1.45 1.04 0 1.43 1.45 1.43 3.1 0 1.73-.37 3.15-1.42 3.15-.35 0-.91-.22-1.21-1.43Z"
        clipRule="evenodd"
      />
      <path
        fill="#333F48"
        d="M125.97 43.42a12.87 12.87 0 0 0 1.75-6.88c.08-2.4-.53-4.77-1.75-6.84h1a11.85 11.85 0 0 1 1.87 6.84c.07 2.43-.58 4.82-1.86 6.88h-1.02Zm5.83-9.03c-.24 0-.49-.07-.7-.2l-.13.48c.26.15.54.22.84.22a1.32 1.32 0 0 0 1.38-1.39 1.7 1.7 0 0 0-.85-1.42c-.47-.34-.73-.53-.73-1.02a.68.68 0 0 1 .71-.7c.21-.01.42.05.59.16l.14-.48a1.28 1.28 0 0 0-.7-.19 1.25 1.25 0 0 0-1.3 1.3 1.84 1.84 0 0 0 .93 1.37 1.27 1.27 0 0 1 .65 1.03.78.78 0 0 1-.82.84Zm4.24-.52.02.7.01.27h-.5l-.03-.37h-.01a.94.94 0 0 1-.77.43c-.62 0-.86-.48-.86-1.36v-2.25h.56v2.17c0 .55.09.96.48.96a.55.55 0 0 0 .5-.47c.03-.1.04-.2.03-.32V31.3h.57v2.58Z"
      />
      <path
        fill="#333F48"
        fillRule="evenodd"
        d="M136.87 34.63v.21h.48l.04-.46h.02a.74.74 0 0 0 .7.52c.55 0 1.08-.59 1.08-1.87 0-1.16-.42-1.8-.97-1.8a.8.8 0 0 0-.75.48h-.01v-1.95h-.57V34c0 .17 0 .43-.02.64Zm.61-.82a.68.68 0 0 1-.02-.22v-1l.01-.24c.05-.3.27-.63.53-.63.46 0 .63.63.63 1.34 0 .76-.16 1.37-.62 1.37-.15 0-.4-.1-.53-.62Z"
        clipRule="evenodd"
      />
      <path
        fill="#333F48"
        d="M141.63 34.75c-.18.1-.38.14-.59.14-.78 0-1.3-.63-1.3-1.8 0-1.02.52-1.85 1.4-1.85.17 0 .35.04.5.11l-.1.46a.92.92 0 0 0-.41-.1c-.57 0-.82.68-.82 1.38 0 .83.31 1.33.83 1.33.14 0 .28-.04.41-.1l.08.43Zm2.73-.18-.02-.7V31.3h-.57v2.34c0 .11 0 .22-.03.32a.55.55 0 0 1-.5.47c-.4 0-.48-.4-.48-.96V31.3h-.57v2.25c0 .88.24 1.36.87 1.36a.93.93 0 0 0 .76-.43h.02l.03.37h.5l-.01-.27Zm1.53-4.22v.94h.68v.43h-.68v2.11c0 .46.16.59.37.59.08 0 .15 0 .23-.02l.02.43c-.14.04-.28.06-.42.06a.72.72 0 0 1-.56-.21 1.3 1.3 0 0 1-.2-.9v-2.06h-.44v-.43h.43v-.78l.57-.16Z"
      />
      <path
        fill="#333F48"
        fillRule="evenodd"
        d="m148.5 34.47.03.37h.52a5.58 5.58 0 0 1-.04-.8V32.5c0-.8-.3-1.27-1.02-1.27-.29 0-.58.08-.83.24l.13.4c.17-.12.38-.19.59-.19.44 0 .56.33.56.8v.12c-.8 0-1.51.4-1.51 1.29a.9.9 0 0 0 .84 1.01.8.8 0 0 0 .7-.43h.03Zm-1.02-.64c0-.77.68-.82.97-.82v.72l-.01.2c-.07.35-.28.53-.53.53-.2 0-.43-.17-.43-.63Z"
        clipRule="evenodd"
      />
      <path
        fill="#333F48"
        d="M149.85 31.57v-.28h.49l.03.43h.01a.9.9 0 0 1 .81-.49c.5 0 .86.37.86 1.23v2.38h-.56v-2.29c0-.42-.08-.84-.5-.84-.23 0-.46.2-.53.58-.02.1-.03.2-.02.31v2.24h-.57V32.2c0-.27 0-.46-.02-.64Z"
      />
      <path
        fill="#333F48"
        fillRule="evenodd"
        d="M154.15 34.44c-.41 0-.84-.23-.85-1.32h1.65l.01-.32c0-.8-.28-1.57-1.01-1.57-.71 0-1.2.72-1.2 1.87 0 1.09.44 1.78 1.3 1.78.26 0 .53-.05.77-.17l-.09-.41c-.18.1-.38.14-.58.14Zm-.26-2.77c.27 0 .54.32.53 1.03h-1.11c.02-.48.21-1.03.58-1.03Zm3.93 1.4c0 1.37-.64 1.83-1.18 1.83-.64 0-1.15-.58-1.15-1.83 0-1.3.58-1.84 1.19-1.84.63 0 1.14.6 1.14 1.84Zm-1.77 0c0 .58.1 1.38.62 1.38.48 0 .57-.83.57-1.38 0-.55-.1-1.38-.59-1.38-.5 0-.6.83-.6 1.38Z"
        clipRule="evenodd"
      />
      <path
        fill="#333F48"
        d="m160.66 34.55-.01-.68V31.3h-.57v2.34c0 .11 0 .22-.03.32a.55.55 0 0 1-.5.47c-.4 0-.48-.4-.48-.96V31.3h-.57v2.25c0 .88.24 1.36.87 1.36a.93.93 0 0 0 .76-.43h.01l.04.37h.5l-.02-.29Zm.74-.29c.18.1.38.17.58.18a.48.48 0 0 0 .5-.31.47.47 0 0 0 .02-.2c0-.28-.1-.46-.45-.7-.46-.3-.71-.6-.71-1.01a.95.95 0 0 1 .97-1c.23.01.45.07.64.2l-.15.42a.84.84 0 0 0-.47-.16.43.43 0 0 0-.47.45c0 .24.1.38.44.62a1.3 1.3 0 0 1 .74 1.08 1 1 0 0 1-.65 1 .98.98 0 0 1-.41.05c-.26 0-.5-.06-.71-.2l.14-.42Zm-29.8 7.05v-4.94h-.56v4.94h.57Zm.93-2.63-.02-.63-.01-.3h.5l.02.43h.02a.9.9 0 0 1 .81-.48c.5 0 .86.37.86 1.23v2.38h-.57v-2.29c0-.42-.08-.84-.49-.84-.24 0-.46.2-.54.58l-.02.31v2.24h-.56v-2.63Zm2.91 3.37a.77.77 0 0 1-.48.28l.08.45c.29-.01.56-.13.78-.33a1.8 1.8 0 0 0 .35-1.36v-3.33h-.56v3.16c.05.39 0 .78-.17 1.13Zm.77-5.07.02-.14a.37.37 0 0 0-.24-.34.37.37 0 1 0-.1.71.33.33 0 0 0 .32-.23Z"
      />
      <path
        fill="#333F48"
        fillRule="evenodd"
        d="M137.4 39.59c.01 1.08.44 1.31.85 1.31.2 0 .4-.04.59-.14l.09.42c-.25.12-.51.18-.78.17-.85 0-1.3-.7-1.3-1.78 0-1.15.5-1.87 1.2-1.87.73 0 1.01.76 1.01 1.57v.31h-1.65Zm1.12-.42c.02-.71-.26-1.03-.53-1.03-.36 0-.55.54-.57 1.03h1.1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333F48"
        d="M140.88 41.36c.2 0 .41-.04.6-.14l-.08-.43a.97.97 0 0 1-.42.1c-.52 0-.83-.5-.83-1.33 0-.7.26-1.38.82-1.38.14 0 .28.04.4.1l.11-.46a1.14 1.14 0 0 0-.5-.11c-.88 0-1.4.83-1.4 1.85 0 1.17.53 1.8 1.3 1.8Zm1.94-4.54v.94h.69v.43h-.69v2.11c0 .46.17.59.38.59.08 0 .15 0 .23-.02l.02.43c-.14.04-.28.06-.42.06a.72.72 0 0 1-.56-.22 1.3 1.3 0 0 1-.21-.9V38.2h-.43v-.43h.43v-.78l.56-.16Zm1.85.16c.01-.04.02-.09.01-.14a.33.33 0 0 0-.2-.34.34.34 0 0 0-.45.2.33.33 0 0 0-.02.14.33.33 0 0 0 .09.26.33.33 0 0 0 .24.11.33.33 0 0 0 .25-.1.33.33 0 0 0 .08-.13Zm-.6.78v3.55h.57v-3.55h-.57Z"
      />
      <path
        fill="#333F48"
        fillRule="evenodd"
        d="M147.67 39.54c0 1.37-.64 1.83-1.18 1.83-.64 0-1.16-.58-1.16-1.83 0-1.3.58-1.84 1.2-1.84.63 0 1.14.6 1.14 1.84Zm-1.77 0c0 .58.1 1.38.62 1.38.48 0 .57-.83.57-1.38 0-.56-.1-1.38-.6-1.38-.49 0-.59.83-.59 1.38Z"
        clipRule="evenodd"
      />
      <path
        fill="#333F48"
        d="m148.35 38.05.02.63v2.63h.56v-2.24c0-.1 0-.2.02-.31.08-.38.3-.58.54-.58.41 0 .5.42.5.84v2.3h.56v-2.4c0-.85-.37-1.22-.86-1.22a.9.9 0 0 0-.81.48h-.02l-.03-.42h-.5l.02.3Zm4.21 2.65c.2.13.44.2.69.2.5 0 .82-.36.82-.95a.9.9 0 0 0-.96-1h-.13v-.42h.1a.86.86 0 0 0 .87-.85c0-.48-.26-.73-.63-.73-.22.01-.43.09-.6.22l-.12-.42a1.45 1.45 0 0 1 1.28-.2 1.02 1.02 0 0 1 .63 1.03 1.2 1.2 0 0 1-.7 1.11v.02a1.18 1.18 0 0 1 .83 1.25 1.3 1.3 0 0 1-.83 1.31 1.6 1.6 0 0 1-1.38-.13l.13-.44Z"
      />
      <path
        fill="#333F48"
        fillRule="evenodd"
        d="M156.5 41.37c.7 0 1.25-.71 1.25-2.45 0-1.52-.4-2.44-1.18-2.44-.78 0-1.25.85-1.25 2.45 0 1.56.45 2.44 1.19 2.44Zm.05-.48c-.47 0-.67-.81-.67-1.96s.2-1.96.66-1.96.64.84.64 1.96c0 1.14-.18 1.96-.63 1.96Z"
        clipRule="evenodd"
      />
      <path
        fill="#333F48"
        d="m159.63 38.68-.02-.63-.01-.3h.5l.02.45h.02a.89.89 0 0 1 .8-.5.74.74 0 0 1 .74.54h.01c.09-.16.2-.3.35-.4.15-.1.32-.14.5-.14.47 0 .85.35.85 1.26v2.35h-.56v-2.22c0-.46-.07-.91-.5-.91-.23 0-.44.2-.52.53-.02.1-.02.21-.02.32v2.28h-.56v-2.33c0-.4-.07-.8-.5-.8-.22 0-.46.2-.52.57-.02.1-.02.2-.02.31v2.26h-.56v-2.64Z"
      />
      <path
        fill="#333F48"
        fillRule="evenodd"
        d="m166.4 37.98.02-.22h-.51l-.03.4h-.02a.7.7 0 0 0-.66-.46c-.52 0-1.11.54-1.11 1.85 0 1.04.4 1.76 1.04 1.76a.72.72 0 0 0 .68-.44h.02v.36c0 .8-.28 1.09-.73 1.09a1.4 1.4 0 0 1-.66-.16l-.13.44a1.7 1.7 0 0 0 1.3.09c.15-.07.3-.17.42-.3.24-.25.36-.6.36-1.53v-2c0-.39 0-.67.02-.88Zm-.6.75c.02.08.03.17.03.25v1.03c0 .1-.01.22-.04.32-.12.43-.33.5-.5.5-.35 0-.63-.4-.63-1.3 0-.8.21-1.34.63-1.34.32 0 .44.3.5.54Z"
        clipRule="evenodd"
      />
      <path
        fill="#AE2573"
        fillRule="evenodd"
        d="M165.53 4.56h.57v-.99h.27c.3 0 .46.12.5.39.04.2.1.41.2.6h.61c-.1-.2-.15-.4-.18-.61a.71.71 0 0 0-.45-.6v-.03a.63.63 0 0 0 .51-.57.67.67 0 0 0-.24-.54c-.26-.14-.55-.2-.85-.18-.32 0-.63.02-.94.08v2.45Zm.85-1.4h-.27v-.7c.1-.02.21-.03.32-.02.35 0 .52.15.52.37 0 .25-.25.36-.57.36Z"
        clipRule="evenodd"
      />
      <path
        fill="#AE2573"
        fillRule="evenodd"
        d="M168.6 4.7c.28-.43.41-.92.4-1.43a2.46 2.46 0 0 0-2.51-2.45 2.52 2.52 0 1 0 2.12 3.87Zm-3.88-.68a1.9 1.9 0 0 1-.13-.75 1.9 1.9 0 1 1 3.78.02 1.9 1.9 0 0 1-1.14 1.8 1.88 1.88 0 0 1-1.47 0 1.9 1.9 0 0 1-1.04-1.07Z"
        clipRule="evenodd"
      />
      <path
        fill="#AE2573"
        d="m67.58 4.3.68-3.4H55.37l-4.72 23.63h5.62l1.97-9.88h6.73l.68-3.4h-6.73l1.4-6.95h7.26Z"
      />
      <path
        fill="#AE2573"
        fillRule="evenodd"
        d="M76.03 24.53h4.58l3.36-16.78a13.44 13.44 0 0 0-5.55-1.26c-7.94 0-11.77 8.16-11.77 13.46 0 2.36 1.07 4.94 3.97 4.94 3.45 0 5.35-3.4 6.39-5.27l.02-.03-1 4.94Zm-3.01-3.3c-.61 0-1.29-.6-1.29-1.71v-.04c0-3.15 2.33-10.3 5.87-10.3.4-.01.8.05 1.18.17a42.96 42.96 0 0 1-2.97 8.95c-.57 1.22-1.65 2.94-2.8 2.94Z"
        clipRule="evenodd"
      />
      <path
        fill="#AE2573"
        d="M96.57 9.96a6.99 6.99 0 0 0-2.65-.65c-1.6 0-2.32.9-2.32 1.76 0 .68.18 1 1.6 2.54l.47.46c1.33 1.44 2.61 2.9 2.61 5.05 0 2.36-1.75 5.76-6.83 5.76a9.84 9.84 0 0 1-5.05-1.36l1.29-2.54a6.97 6.97 0 0 0 3.44 1.07 2.17 2.17 0 0 0 2.4-2.07c0-.83-.47-1.4-1.76-2.87l-.9-1c-1.14-1.21-2.03-2.5-2.03-4.22 0-2.9 2.6-5.4 6.69-5.4 1.4.03 2.78.3 4.08.82l-1.04 2.65Z"
      />
      <path
        fill="#AE2573"
        fillRule="evenodd"
        d="M103.98 24.89c2.3 0 4.48-.83 7.34-2.62l-1.43-2.46c-2.22 1.4-3.55 1.93-4.55 1.93-1.57 0-1.9-1.58-1.9-2.58 0-.9.14-1.79.4-2.65 2.28-.22 4.5-.82 6.58-1.79 1.9-1 3.23-2.5 3.23-4.8 0-1.6-.97-3.43-3.98-3.43-6.19 0-11.42 7.16-11.42 12.64 0 3.43 2.08 5.76 5.73 5.76Zm4.73-15.75c.75 0 1 .56 1 1.14v.04c0 2.97-3.54 3.61-5.26 3.9 1.32-3.55 3.15-5.08 4.26-5.08Z"
        clipRule="evenodd"
      />
      <path
        fill="#AE2573"
        d="m122.38 6.84-.9 4.66c1.08-2 3.23-5.02 6.45-5.02a3.18 3.18 0 0 1 3.43 3.44 17.56 17.56 0 0 1-.43 3.15l-2.29 11.46h-5l2.25-11.2c.15-.73.26-1.46.32-2.2 0-.78-.5-1-.86-1-1.29 0-2.47 2.01-2.93 3.05-1.4 2.94-2.23 6.48-3.26 11.35h-4.87l3.54-17.69h4.55Zm16.36 6.73 1.32-6.73h-4.65l-3.55 17.69h4.87a40.45 40.45 0 0 1 3.05-9.6c1.14-2.29 2.47-4.08 4.15-4.08.25 0 .5.05.75.1l.9-4.36c-.26-.06-.53-.1-.8-.1-3.05 0-4.87 4.29-5.95 6.86l-.1.22Z"
      />
      <path
        fill="#AE2573"
        fillRule="evenodd"
        d="M158.71 24.53h-4.58l1-4.94-.01.03c-1.05 1.87-2.94 5.27-6.4 5.27-2.9 0-3.97-2.58-3.97-4.94 0-5.3 3.83-13.46 11.78-13.46 1.92.02 3.8.45 5.55 1.26l-3.37 16.78Zm-8.88-5.01c0 1.1.68 1.71 1.3 1.71 1.14 0 2.22-1.71 2.79-2.93a43 43 0 0 0 2.97-8.95 3.67 3.67 0 0 0-1.18-.18c-3.55 0-5.88 7.16-5.88 10.31v.04Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="a"
          x1="7.79"
          x2="24.44"
          y1="17.39"
          y2="17.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".23" stopColor="#B51F76" />
          <stop offset=".99" stopColor="#0F9D7D" />
        </linearGradient>
      </defs>
    </svg>
  );
};
