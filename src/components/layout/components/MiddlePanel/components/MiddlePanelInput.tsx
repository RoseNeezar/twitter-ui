import React from "react";

const MiddlePanelInput = () => {
  return (
    <div className="pb-4 border-b border-l border-r border-gray-200 dark:border-dim-200">
      <div className="flex flex-shrink-0 p-4 pb-0">
        <div className="flex w-12 items-top">
          <img
            className="inline-block w-10 h-10 rounded-full"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="w-full p-2">
          <textarea
            className="w-full h-10 text-gray-900 placeholder-gray-400 bg-transparent border-0 resize-none dark:text-white focus:outline-none"
            placeholder="What's happening?"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="flex w-full p-2 text-white items-top pl-14">
        <a
          href="#"
          className="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <g>
              <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z" />
              <circle cx="8.868" cy="8.309" r="1.542" />
            </g>
          </svg>
        </a>
        <a
          href="#"
          className="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <g>
              <path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z" />
              <path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z" />
            </g>
          </svg>
        </a>
        <a
          href="#"
          className="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <g>
              <path d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z" />
            </g>
          </svg>
        </a>
        <a
          href="#"
          className="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <g>
              <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" />
              <path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z" />
              <circle cx="14.738" cy="9.458" r="1.478" />
              <circle cx="9.262" cy="9.458" r="1.478" />
            </g>
          </svg>
        </a>
        <a
          href="#"
          className="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <g>
              <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z" />
              <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z" />
              <path d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z" />
              <path d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z" />
            </g>
          </svg>
        </a>
        <a
          href="#"
          className="px-4 py-1 ml-auto mr-1 text-white bg-blue-400 rounded-full hover:bg-blue-500"
        >
          <span className="text-sm font-bold">Tweet</span>
        </a>
      </div>
    </div>
  );
};

export default MiddlePanelInput;