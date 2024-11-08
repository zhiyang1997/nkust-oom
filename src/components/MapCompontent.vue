<template>
  <div class="map-container" style="width: 65%; margin: auto">
    <!-- 引入 SVG 文件 -->
    <!-- SVG 內容從 Illustrator 匯出後直接貼到這裡 -->
    <div class="svg-wrapper">
      <svg
        id="圖層_1"
        data-name="圖層 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 69.97 121.89"
        width="300"
        height="400"
      >
        <path
          id="area1"
          class="cls-1"
          d="M173.1,570.11l1.46-1.28a1.15,1.15,0,0,1,1.64.12h0a.82.82,0,0,0,.94.24h0a1.08,1.08,0,0,1,1,.11l.78.55.9-.06a1.32,1.32,0,0,1,1.24.69h0a1.24,1.24,0,0,0,1.53.56h0a.6.6,0,0,1,.55.07l1.25.83a2.61,2.61,0,0,0,1.7.42l.95-.09a1.79,1.79,0,0,1,1.55.66l.27.34h0a1,1,0,0,1,1,1h0a2,2,0,0,0,.49,1.33l.59.68a1.57,1.57,0,0,1,.28,1.57h0l.84.53a3.44,3.44,0,0,1,1.52,2h0a.74.74,0,0,1-.09.58l-.54.87,0,.09a2.51,2.51,0,0,1-1.65,1.07h0a1.4,1.4,0,0,0-1.07.9l-.06.16a2.08,2.08,0,0,0-.11,1.13l.12.78-.43,1h0a1.11,1.11,0,0,1-1.52-.11l-.9-1a.8.8,0,0,0-1.1,0l-.59.65a.89.89,0,0,1-1.22.09h0a1.69,1.69,0,0,0-1.35-.36l-.32.14a1.71,1.71,0,0,0-.82.4l-2.46,2.32-3.68.27-2.93-.44-.22-.1a1,1,0,0,0-1.26.47l-.1.23a.7.7,0,0,1-1.07.25l-.73-.59c-.57-.5-.53-1.19.06-1.4h0a1.23,1.23,0,0,0,.43-1.55l-1-2.26a.63.63,0,0,0-1-.21h0a4.17,4.17,0,0,1-2.68,1h0a3.72,3.72,0,0,1,0-2l.44-1.68,0-.73a1.54,1.54,0,0,0-.68-1.22h0a2.71,2.71,0,0,1,.89-2.53l.52-.46,1-.92,1.12-.4,2.56-1.25.06,0c2.25.1,2.91-1.26,1.81-3h0A.59.59,0,0,1,173.1,570.11Z"
          transform="translate(-130.29 -543.49)"
          @mouseenter="handleMouseEnter('燕巢區', 'area1')"
          @mouseleave="handleMouseLeave('area1')"
          @click="handleAreaClick('燕巢校區', 'area1', 'yanchao1.jpg')"
        />
        <path
          class="cls-2"
          d="M155.86,585.15l0,0A.94.94,0,0,0,157,585l.57-.58a1.17,1.17,0,0,1,.84-.36h.65l1.24-.81.74-.64a.71.71,0,0,1,.95,0l.51.49a.62.62,0,0,0,.52.16l.45-.06a.65.65,0,0,1,.6.23l.88,1a.63.63,0,0,0,.67.19l2.26-.75a1.42,1.42,0,0,1,1.06.24l1.11,2.61a2.46,2.46,0,0,1-.91,1.35l-1.19.18c-.3,0-.56.3-.59.67l-.24,2.59a10,10,0,0,1-.54,2.29c-.19,0-2-.52-2-.52s-1.25.13-1.17.21a.69.69,0,0,1,0,.3,1.49,1.49,0,0,1-1.48,1.39h-1.66l-1.24-1.53a1.28,1.28,0,0,0-1-.49l-1.71,0a1.67,1.67,0,0,0-1.39.7l-.19.27a1.1,1.1,0,0,1-1,.46l-.78-.07a.47.47,0,0,1-.4-.27h0a1.66,1.66,0,0,1,.2-1.76l.49-.62a1.92,1.92,0,0,0,.23-.35l1.29-2.53.48-1.24a1.74,1.74,0,0,0,.11-.75l-.13-1.55A.36.36,0,0,1,155.86,585.15Z"
          transform="translate(-130.29 -543.49)"
        />
        <path
          id="area2"
          class="cls-1"
          d="M150.56,598.39l.18,1.51a2.4,2.4,0,0,0,.27.82l.64,1.18a.76.76,0,0,0,1.27.1l.43-.55,3.2.19,2.61-.14a1,1,0,0,0,.7-.35,6.08,6.08,0,0,1,.68-.73,2.33,2.33,0,0,1,.4.61.43.43,0,0,1-.15.58h0a.4.4,0,0,0,0,.66l.78.64,1.22,1a.65.65,0,0,0,.78,0l.77-.55h0a1.13,1.13,0,0,0,1.65-.08l1.58-1.87.4-.65a1.72,1.72,0,0,0-.09-2h0a.77.77,0,0,1,.27-1.15l.67-.34a4.23,4.23,0,0,0,1.65-1.49h0a3.37,3.37,0,0,0,.51-2.14l-.32-3a1.27,1.27,0,0,0-.38-.78l-1.35-1.38a.59.59,0,0,0-.23-.09l-.77-.15a1.17,1.17,0,0,0-.46.94l0,.17a4,4,0,0,1-.14,1.86l-.19.63-.2,1.45a.61.61,0,0,1-.84.49l-.87-.33a2.13,2.13,0,0,0-1.17-.11l-.16,0a.53.53,0,0,0-.44.48h0a1.39,1.39,0,0,1-1.38,1.28h-.83a1.83,1.83,0,0,1-1.43-.69l-.74-.91a1.12,1.12,0,0,0-.87-.42l-1.59,0a2,2,0,0,0-1.71.87l-.13.18a.91.91,0,0,1-.82.39h0a2.08,2.08,0,0,0-1.86.84l-1.16,1.56A1.83,1.83,0,0,0,150.56,598.39Z"
          transform="translate(-130.29 -543.49)"
          @mouseenter="handleMouseEnter('楠梓區', 'area2')"
          @mouseleave="handleMouseLeave('area2')"
          @click="
            handleAreaClick('第一校區、楠梓校區', 'area2', 'nanzih1.jpeg')
          "
        />
        <path
          class="cls-2"
          d="M169.75,596.67,171,598a1.51,1.51,0,0,0,1.11.48h2.11a2,2,0,0,1,1.25.45l.91.76a1.06,1.06,0,0,0,1.45-.09l.9-1a2.07,2.07,0,0,0,.57-1.43v-.52a1.31,1.31,0,0,1,.81-1.21h0a.83.83,0,0,0,.51-.77v-.27a1.18,1.18,0,0,1,.4-.88l1.54-1.35a.79.79,0,0,1,1.21.2l.35.58a1,1,0,0,0,1.18.41l1.12-.43a1.79,1.79,0,0,0,.42-.25l1.2-1.05a2,2,0,0,0,.68-1.34l.21-3.08"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M152.09,602.26l-.08,1.19a1.05,1.05,0,0,1-.62.88h0a1,1,0,0,0-.59.92h0a.82.82,0,0,0,.72.82h0a.76.76,0,0,1,.66.65l.27,1.91a2.51,2.51,0,0,1,0,.55,4.93,4.93,0,0,0,0,1.39c.09,0,1.75-.34,2.75-.55a1.56,1.56,0,0,1,1.33.33l.58.49.24.13a1.54,1.54,0,0,0,1.68-.18h0a.6.6,0,0,1,.87.11,9.23,9.23,0,0,0,1,1.24h0A1,1,0,0,1,162,613l.12.94a1,1,0,0,0,.65.78h0a.85.85,0,0,0,1.1-.62l.24-1.11a2.29,2.29,0,0,1,.4-.9l2.3-3.16a1.58,1.58,0,0,0,.29-1.19l-.19-1.33a2.16,2.16,0,0,0-.69-1.27l-2-1.74"
          transform="translate(-130.29 -543.49)"
          @mouseenter="handleMouseEnter('區域2', 'area2')"
          @mouseleave="handleMouseLeave('area2')"
        />
        <path
          id="area3"
          class="cls-1"
          d="M150.76,625.14l.87.94a3,3,0,0,1,.71,2.69h0a1.27,1.27,0,0,0,.24,1.05l8.48,10.47a2.14,2.14,0,0,1,.29,2.2l-.2.44a.92.92,0,0,0,.56,1.24h0a1.37,1.37,0,0,0,1.28-.24l2.15-1.73a1.2,1.2,0,0,0,.2-1.67L159,632.32a22.17,22.17,0,0,1-1.71-2.58L156,627.32a2.86,2.86,0,0,0-1.4-1.14L150.85,625A.09.09,0,0,0,150.76,625.14Z"
          transform="translate(-130.29 -543.49)"
          @mouseenter="handleMouseEnter('旗津區', 'area3')"
          @mouseleave="handleMouseLeave('area3')"
          @click="handleAreaClick('旗津校區', 'area3', 'cijin1.png')"
        />
        <path
          id="area4"
          class="cls-1"
          d="M167.48,609l.26.42a1.29,1.29,0,0,0,.93.59l1.39.18a.52.52,0,0,1,.34.83l-.73,1a.78.78,0,0,0-.08.84l.12.23a.46.46,0,0,1-.41.68H169a.09.09,0,0,0-.06.16l2.94,2.9a1.43,1.43,0,0,1,.33.47l.45,1a1.29,1.29,0,0,1-.11,1.26l-.2.29a1,1,0,0,1-1,.43l-4.42-.69a.86.86,0,0,0-.84.37l-.15.23a.89.89,0,0,1-1,.37l-2.44-.57a2,2,0,0,0-.9,0l-3.34.86a.7.7,0,0,1-.88-.68v-.68a1.27,1.27,0,0,0-.15-.6l-.41-.76a.76.76,0,0,1,.12-.87l.6-.62A2.37,2.37,0,0,1,159,616l2.43-.31a1.94,1.94,0,0,0,.33-.07l.92-.29a2.19,2.19,0,0,0,1.54-2.07h0a1.74,1.74,0,0,1,.32-1l2.24-3.19A.42.42,0,0,1,167.48,609Z"
          transform="translate(-130.29 -543.49)"
          @mouseenter="handleMouseEnter('三民區', 'area4')"
          @mouseleave="handleMouseLeave('area4')"
          @click="handleAreaClick('建工校區', 'area4', 'jiangong1.jpg')"
        />
        <path
          class="cls-2"
          d="M152.49,610.57,150.1,612a1.87,1.87,0,0,0-.88,1.24l-.26,1.36a3.05,3.05,0,0,0,.15,1.69l1.37,3.51c0,.11.1.23.15.34l1,1.89a1.69,1.69,0,0,1-.18,1.84l-.64.8a.3.3,0,0,0,.14.47l3.87,1.31a1.38,1.38,0,0,0,1,0l.39-.15a1.39,1.39,0,0,1,1.06,0l2,.88a1.38,1.38,0,0,0,1.14,0l3.63-1.71a2.24,2.24,0,0,1,1.83,0l2.55,1.1a4.06,4.06,0,0,1,1.09.7l.39.35a.61.61,0,0,1,0,1l-2.34,1.67a1.56,1.56,0,0,0-.66,1.48l.14,1.17a.8.8,0,0,0,1.1.65l.94-.38a1.14,1.14,0,0,1,1.52.75l.15.56a1.66,1.66,0,0,1-.32,1.48L169,637.53a5.91,5.91,0,0,1-.95.92l-2.74,2.08"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M192.93,582l.33.78a1.43,1.43,0,0,0,1.31.87h3.34a1.15,1.15,0,0,1,1.16,1.15v4.36a5.25,5.25,0,0,0,0,.56l.59,5.12a10.79,10.79,0,0,1-.35,4.19l-1.45,5.1a6.79,6.79,0,0,1-.8,1.78l-.77,1.22a8.4,8.4,0,0,0-1.17,3l-.55,2.93a12.39,12.39,0,0,0-.15,3.44l.19,2a12.29,12.29,0,0,1-.46,4.67l-.12.37a3.33,3.33,0,0,0,.37,2.7l1.33,2.08a6.65,6.65,0,0,1,.91,2.28l.37,1.81v4.33a8.54,8.54,0,0,1-.81,3.62l-1.8,3.85L193.08,647a11.72,11.72,0,0,0-1.08,3.51l-.29,2.14a7.21,7.21,0,0,0,.07,2.45l.22,1.1a13,13,0,0,1,.16,4.08l-.41,3.4a1.38,1.38,0,0,1-1.88,1.12l-6.14-2.46a6.43,6.43,0,0,1-1.63-.93l-6.6-5.07-.35-.29-4.65-4.24a3.64,3.64,0,0,1-1-1.65l-.16-.52a.56.56,0,0,0-.82-.32l-.4.24a1.16,1.16,0,0,1-1.55-.35L163,643.93"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M186.14,593.06v2.41A6.8,6.8,0,0,1,186,597l-.38,1.66-.87,2a3.59,3.59,0,0,0-.25,2l0,.11a1.15,1.15,0,0,1-1.13,1.34h0a1.36,1.36,0,0,0-1,.44L180.06,607l-2.73,3.21a2.11,2.11,0,0,1-.75.57l-.3.15a1.47,1.47,0,0,1-1.82-.48h0a.59.59,0,0,0-.87-.11l-.09.07a1.69,1.69,0,0,1-1.63.3h0a2.28,2.28,0,0,0-.73-.12h-.64"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M184,603.89l-.42,2.05-.08.32a1.23,1.23,0,0,0,.51,1.31h0a1.94,1.94,0,0,1,.79,1.07l.74,2.42.73,2.21a3.14,3.14,0,0,1,.15,1.29l-.23,2.65a.48.48,0,0,0,.41.51l2.33.27a3.16,3.16,0,0,0,1.79-.33l2-1a2.43,2.43,0,0,1,.47-.19l1.26-.37"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M157.58,620.64l-1.47,1.71a1.28,1.28,0,0,0,0,1.69l.87,1,.64.45a2.48,2.48,0,0,1,.79.94l.23.49"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M172.26,617.44l1.11-.33a1.24,1.24,0,0,1,1.24.33l.51.52a.3.3,0,0,0,.47-.05l.24-.41a.39.39,0,0,1,.6-.08l.16.14a.7.7,0,0,0,.95,0l.22-.19a1,1,0,0,1,1.19-.14l.18.1a1.15,1.15,0,0,1,.56.68l.3,1.05,1.39,2.82.77.4a.31.31,0,0,1,0,.55l-.62.29a1.53,1.53,0,0,0-.82,1,5.21,5.21,0,0,0-.2.88c0,.07-.16,1.07-.28,1.69a1.34,1.34,0,0,1-.44.78l-.47.42a2.45,2.45,0,0,0-.68,1l-.34,1.05a4.65,4.65,0,0,0-.1,2.51h0a1.86,1.86,0,0,0,.48.88l1.09,1.14.26.23,1.38,1a2.92,2.92,0,0,1,1.12,1.78h0a2.2,2.2,0,0,0,1.06,1.51h0a2.1,2.1,0,0,1,1,1.36l.37,1.61a4.21,4.21,0,0,1,.12,1v1a3.21,3.21,0,0,1-.36,1.49l-.08.18a3.48,3.48,0,0,1-1.24,1.37l-3.53,2.25a2.55,2.55,0,0,0-.47.4l-1.63,1.77a3.21,3.21,0,0,0-.39.52l-.8,1.32a5.55,5.55,0,0,0-.78,2.65l0,.62"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M170.78,634.17s2.4-.29,2.48-.33,2.28.13,2.39.13,2.73-1,2.73-1"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M180.2,619.5l2.71-1.14a8.69,8.69,0,0,1,1.74-.51l1.64-.29"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M184.24,646.22l.59.07a4.74,4.74,0,0,1,2.67,1.2h0l5.58-.51"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M151,549.62l.23,1a4.29,4.29,0,0,1,.13,1.07V553a.54.54,0,0,1-.4.52h0a2,2,0,0,0-1.39,1.3c-.25.76-.56,1.7-.6,1.78a7.83,7.83,0,0,1-1.46.67,2.34,2.34,0,0,1-.86.16h-.92a5.69,5.69,0,0,0-.83.07l-1.11.19-.73-.52a1.44,1.44,0,0,0-1.57-.1c-.07.05-.12.09-.12.11a6.93,6.93,0,0,1-.25.73,2.68,2.68,0,0,0,0,1.79,3.6,3.6,0,0,1,.27,1,3.18,3.18,0,0,0-.57.51,1.38,1.38,0,0,0-.19,1.71l.2.29a3.67,3.67,0,0,0,.84.92l.71.56a3.34,3.34,0,0,0,1.43.66l1.56.31s1.81,1.88,1.81,2a24.57,24.57,0,0,0,2.92.48.34.34,0,0,1,.29.25h0A2.64,2.64,0,0,0,152,570.1l2,.76a24.4,24.4,0,0,0,2.42.69,19.83,19.83,0,0,0,2-1.78,2.84,2.84,0,0,0,.91-2.31c0-.44-.06-.83-.06-.91a20.76,20.76,0,0,1,.93-2,3.68,3.68,0,0,1,.65-.91l.13-.13a5,5,0,0,0,1.44-3.52v-1c0-.09,0-.18,0-.27l-.21-2.88a2,2,0,0,0-1.57-1.76h0a4.09,4.09,0,0,1-2.51-1.64l-.33-.47a2.68,2.68,0,0,0-1.79-1.11l-1.21-.19a4.39,4.39,0,0,1-1.27-.41l-2.06-1.06A.39.39,0,0,0,151,549.62Z"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M150.56,598.39l-1.66-4.11-4-7.49-4.73-11.62a1.58,1.58,0,0,0-1.76-1l-1.81.35a1.45,1.45,0,0,1-1.46-.62l-.59-.88a1,1,0,0,1,.38-1.43l1.83-.92a1.87,1.87,0,0,0,.91-2.34l-1.35-3.56a2.77,2.77,0,0,0-.28-.54l-.79-1.18a.63.63,0,0,1-.1-.42h0a3.19,3.19,0,0,0-.77-2.53h0a1.09,1.09,0,0,1-.2-1.13h0a2.79,2.79,0,0,0,0-2L131,548.16a3,3,0,0,1,.69-3.1l.06-.07a3.44,3.44,0,0,1,2.91-1l.77.1a3.69,3.69,0,0,1,1.28.45l2.17,1.29a2.11,2.11,0,0,0,.34.16l1.41.51a1.5,1.5,0,0,0,1.47-.23l1.4-1.09a.36.36,0,0,1,.58.18l.72,2.41,2.47,1.1a3.65,3.65,0,0,1,1,.67l.6.55a2.31,2.31,0,0,0,1.85.59l.51-.07"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M134.13,544v1.18a1.64,1.64,0,0,0,.81,1.43l.78.47a1.42,1.42,0,0,1,.69,1.21v1.1l.35,2.56a.32.32,0,0,0,.53.19l.62-.56a.49.49,0,0,1,.75.12l.11.21a1.2,1.2,0,0,1,0,1.24h0a.73.73,0,0,0,.62,1.12h.81a1,1,0,0,1,1,.84l.25,2"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M159.79,565.56l1.83.69a3.3,3.3,0,0,0,2.68-.16l.31-.16a3.79,3.79,0,0,1,3.47,0l.18.09a2.9,2.9,0,0,0,2.89-.15h0a1,1,0,0,1,1.59.66l.7,3.29"
          transform="translate(-130.29 -543.49)"
        />
        <path
          class="cls-2"
          d="M150.8,569.19l-.66,1.24a2.94,2.94,0,0,0-.19,2.32l0,.14a2.2,2.2,0,0,0,.6.92l.53.48a1.52,1.52,0,0,1,.31,1.86l-.88,1.62-.31,1.58a2.88,2.88,0,0,0,.6,2.36h0a2.2,2.2,0,0,1,.49,1.69h0a.92.92,0,0,0,.71,1l3.43.79"
          transform="translate(-130.29 -543.49)"
        />
        <polyline class="cls-2" points="4.94 19.61 7.17 17.74 10.32 19.38" />
        <path
          class="cls-2"
          d="M140.15,575.17l3.61.72,2.46,1.08a1.69,1.69,0,0,0,1,.09l.53-.13a2,2,0,0,1,1.3.13l1.46.71"
          transform="translate(-130.29 -543.49)"
        />
      </svg>
    </div>
    <!-- 校區信息顯示區域 -->
    <div class="info-card" v-if="selectedAreaName">
      <template v-if="selectedAreaName === '第一校區、楠梓校區'">
        <div class="split-container">
          <div class="split-section">
            <img :src="selectedAreaImages.firstCampus" alt="第一校區圖片" />
            <div class="icon-text">
              <div class="icon-content">
                <q-icon name="school" size="24px" class="school-icon" />
                <h4>第一校區</h4>
              </div>
              <div class="icon-content">
                <q-icon name="place" size="24px" style="color: #5c5c5c" />
                <h6>824高雄市燕巢區大學路1號</h6>
              </div>
              <div class="icon-content">
                <q-icon name="phone" size="24px" style="color: #5c5c5c" />
                <h6>07-6011000</h6>
              </div>
            </div>
          </div>
          <div class="split-divider"></div>
          <!-- 中間虛線分隔 -->
          <div class="split-section">
            <img :src="selectedAreaImages.nanzihCampus" alt="楠梓校區圖片" />
            <div class="icon-text">
              <div class="icon-content">
                <q-icon name="school" size="24px" class="school-icon" />
                <h4>楠梓校區</h4>
              </div>
              <div class="icon-content">
                <q-icon name="place" size="24px" style="color: #5c5c5c" />
                <h6>811高雄市楠梓區海專路142號</h6>
              </div>
              <div class="icon-content">
                <q-icon name="phone" size="24px" style="color: #5c5c5c" />
                <h6>07-3617141</h6>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <img :src="selectedAreaImages.default" alt="校區圖片" />
        <div class="icon-text">
          <div class="icon-content">
            <q-icon name="school" size="24px" class="school-icon" />
            <h4>{{ selectedAreaName }}</h4>
          </div>
          <div class="icon-content">
            <q-icon name="place" size="24px" style="color: #5c5c5c" />
            <h6>{{ selectedAddress }}</h6>
          </div>
          <div class="icon-content">
            <q-icon name="phone" size="24px" style="color: #5c5c5c" />
            <h6>{{ selectedPhone }}</h6>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const tooltipVisible = ref(false);
const regionName = ref("");
const selectedAreaName = ref("");
const selectedAddress = ref("");
const selectedPhone = ref("");
const selectedImage = ref("");
let previousAreaId = null; // 用來追蹤上一次點選的區域

// 計算圖片路徑
const imagePaths = {
  第一校區: new URL("../img/map/first1.png", import.meta.url).href,
  楠梓校區: new URL("../img/map/nanzih1.jpeg", import.meta.url).href,
};

const selectedAreaImages = computed(() => {
  if (selectedAreaName.value === "第一校區、楠梓校區") {
    return {
      firstCampus: imagePaths["第一校區"],
      nanzihCampus: imagePaths["楠梓校區"],
    };
  } else {
    return { default: selectedImage.value };
  }
});

const campusDetails = {
  旗津校區: {
    address: "805高雄市旗津區中洲三路1號",
    phone: "07-5721000",
    image: new URL("../img/map/cijin1.png", import.meta.url).href,
  },
  建工校區: {
    address: "807高雄市三民區建工路415號",
    phone: "07-3814526",
    image: new URL("../img/map/jiangong1.jpg", import.meta.url).href,
  },
  燕巢校區: {
    address: "824高雄市燕巢區深中路58號",
    phone: "07-3814526",
    image: new URL("../img/map/yanchao1.jpg", import.meta.url).href,
  },
};

// 監聽 selectedAreaName 的變化
watch(
  selectedAreaName,
  (newValue) => {
    if (campusDetails[newValue]) {
      selectedAddress.value = campusDetails[newValue].address;
      selectedPhone.value = campusDetails[newValue].phone;
      selectedImage.value = campusDetails[newValue].image;
    } else {
      selectedAddress.value = "";
      selectedPhone.value = "";
      selectedImage.value = "";
    }
  },
  { immediate: true } // 確保初始值也能觸發
);

function handleMouseEnter(region, areaId) {
  regionName.value = region;
  tooltipVisible.value = true;

  const area = document.getElementById(areaId);
  if (area) {
    area.style.fill = "orange";
    area.style.transition = "fill 0.5s ease";
  }
}

function handleMouseLeave(areaId) {
  if (areaId !== previousAreaId) {
    const area = document.getElementById(areaId);
    if (area) {
      area.style.fill = "#5b5c5c"; // 恢復灰色
    }
  }
}

// 點擊區域處理：將選中的區域保持橘色，並將上次點選的區域變回灰色
function handleAreaClick(areaName, areaId, imagePath) {
  if (previousAreaId) {
    const previousArea = document.getElementById(previousAreaId);
    if (previousArea) {
      previousArea.style.fill = "#5b5c5c"; // 將上一個區域設為灰色
    }
  }

  const currentArea = document.getElementById(areaId);
  if (currentArea) {
    currentArea.style.fill = "orange"; // 將當前選中的區域設為橘色
  }

  selectedAreaName.value = areaName;
  selectedImage.value = new URL(
    `../img/map/${imagePath}`,
    import.meta.url
  ).href;
  previousAreaId = areaId; // 更新 previousAreaId
}
</script>

<style scoped>
.map-container {
  display: flex;
  margin: auto;
}
.svg-wrapper {
  display: flex; /* 使用 Flexbox */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex: 1;
}

.info-card {
  flex: 1;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* 卡片陰影效果 */

  /* Flexbox 設置 */
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 圖片水平置中 */
}

.split-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* 讓容器填滿整個 info-card 區域 */
  height: 100%;
}

.split-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 45%; /* 確保兩個區域平分 */
}

.split-divider {
  width: 2px;
  background: #ccc;
  height: 100%;
  border-left: 1px dashed #999;
  margin: 0 10px;
}

.icon-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 讓內容靠左對齊 */
  margin-top: 10px;
}

.icon-content {
  display: flex;
  align-items: center;
  margin-bottom: 8px; /* 每組內容之間的間距 */
}

.icon-content q-icon {
  margin-right: 8px; /* 圖標與文字之間的間距 */
}

.school-icon {
  margin-right: 8px; /* 與文字間距 */
  color: #5c5c5c; /* 使用 Quasar 預設色彩系統，改成綠色 */
}

img {
  max-width: 80%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

h4 {
  font-size: 24px; /* 可根據需求調整文字大小 */
  margin: 0; /* 去掉預設 margin */
}

h6 {
  font-size: 16px; /* 可根據需求調整文字大小 */
  margin: 0; /* 去掉預設 margin */
}

.cls-1 {
  fill: #5b5c5c;
  transition: fill 0.5s ease; /* 設置動畫過渡效果 */
}
.cls-1,
.cls-2 {
  stroke: #040000;
  stroke-miterlimit: 10;
}
.cls-2 {
  fill: none;
}
</style>
