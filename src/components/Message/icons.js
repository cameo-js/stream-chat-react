// @ts-check
import React from 'react';

export const ReplyIcon = () => (
  <svg width="18" height="15" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M.56 10.946H.06l-.002-.498L.025.92a.5.5 0 1 1 1-.004l.032 9.029H9.06v-4l9 4.5-9 4.5v-4H.56z"
      fillRule="nonzero"
    />
  </svg>
);

export const DeliveredCheckIcon = () => (
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.72 6.633a.955.955 0 1 0-1.352-1.352L6.986 8.663 5.633 7.31A.956.956 0 1 0 4.28 8.663l2.029 2.028a.956.956 0 0 0 1.353 0l4.058-4.058z"
      fill="#006CFF"
      fillRule="evenodd"
    />
  </svg>
);

export const ReactionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
  >
    <g fillRule="evenodd" clipRule="evenodd">
      <path d="M6 1.2C3.3 1.2 1.2 3.3 1.2 6c0 2.7 2.1 4.8 4.8 4.8 2.7 0 4.8-2.1 4.8-4.8 0-2.7-2.1-4.8-4.8-4.8zM0 6c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z"></path>
      <path d="M5.4 4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zM8.4 4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zM3.3 6.7c.3-.2.6-.1.8.1.3.4.8.9 1.5 1 .6.2 1.4.1 2.4-1 .2-.2.6-.3.8 0 .2.2.3.6 0 .8-1.1 1.3-2.4 1.7-3.5 1.5-1-.2-1.8-.9-2.2-1.5-.2-.3-.1-.7.2-.9z"></path>
    </g>
  </svg>
);

export const ThreadIcon = () => (
  <svg width="14" height="10" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.516 3c4.78 0 4.972 6.5 4.972 6.5-1.6-2.906-2.847-3.184-4.972-3.184v2.872L3.772 4.994 8.516.5V3zM.484 5l4.5-4.237v1.78L2.416 5l2.568 2.125v1.828L.484 5z"
      fillRule="evenodd"
    />
  </svg>
);

export const ErrorIcon = () => (
  <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0zm.875 10.938a.438.438 0 0 1-.438.437h-.875a.438.438 0 0 1-.437-.438v-.874c0-.242.196-.438.438-.438h.875c.241 0 .437.196.437.438v.874zm0-2.626a.438.438 0 0 1-.438.438h-.875a.438.438 0 0 1-.437-.438v-5.25c0-.241.196-.437.438-.437h.875c.241 0 .437.196.437.438v5.25z"
      fill="#EA152F"
      fillRule="evenodd"
    />
  </svg>
);

export const PinIcon = () => (
  <svg
    width="14"
    height="13"
    viewBox="0 0 14 13"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3518 6.686L6.75251 0.0866699L5.80984 1.02867L6.75318 1.972V1.97334L3.45318 5.272L3.45251 5.27334L2.50984 4.32934L1.56718 5.27267L4.39584 8.10067L0.624512 11.8713L1.56718 12.814L5.33851 9.04334L8.16718 11.8713L9.10984 10.9293L8.16718 9.986L11.4672 6.686L12.4098 7.62867L13.3518 6.686ZM7.22451 9.04267L7.22385 9.04334L4.39584 6.21467L7.69518 2.91467L10.5232 5.74267L7.22451 9.04267Z"
      fillRule="evenodd"
    />
  </svg>
);

/** @type {React.FC<import("types").PinIndicatorProps>} */
export const PinIndicator = ({ message, t }) => {
  if (!message || !t) return null;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <PinIcon />
      <div
        style={{
          marginBottom: '0',
          marginTop: '0',
          marginLeft: '8px',
          fontSize: '14px',
        }}
      >
        {message.pinned_by
          ? `${t('Pinned by')} ${
              message.pinned_by?.name || message.pinned_by?.id
            }`
          : t('Message pinned')}
      </div>
    </div>
  );
};
