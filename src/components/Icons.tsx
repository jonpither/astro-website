import 'astro/jsx-runtime'

export function githubIcon(className?: string) {
  return (
    <svg
      class={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
    >
      <path d='M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z' />
    </svg>
  )
}

export function twitterIcon(className?: string) {
  return (
    <svg
      class={className}
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 24 24'
    >
      <path d='M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z' />
    </svg>
  )
}

export function linkedInIcon(className?: string) {
  return (
    <svg
      class={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
    >
      <path d='M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z' />
      <circle cx='1.75' cy='1.75' r='1.75' />
    </svg>
  )
}

export function warningIcon(className?: string) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      class={className}
    >
      <rect fill='none' />
      <line
        x1='128'
        x2='128'
        y1='104'
        y2='144'
        fill='none'
        stroke='#000'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      />
      <path
        fill='none'
        stroke='#000'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
        d='M114.15243,39.98472,26.17616,191.977a16.00005,16.00005,0,0,0,13.84762,24.01535H215.97625A16,16,0,0,0,229.82386,191.977L141.84757,39.98472A16,16,0,0,0,114.15243,39.98472Z'
      />
      <circle cx='128' cy='180' r='12' />
    </svg>
  )
}

export function chevronLeftIcon(className?: string) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      class={className}
    >
      <g data-name='16'>
        <rect width='24' height='24' fill='none' />
        <path d='M14.16,14.72a.75.75,0,0,1,0,1.06.76.76,0,0,1-1.07,0L9.84,12.53a.75.75,0,0,1,0-1.06l3.25-3.25a.77.77,0,0,1,1.07,0,.75.75,0,0,1,0,1.06L11.44,12Z' />
      </g>
    </svg>
  )
}

export function chevronRightIcon(className?: string) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      class={className}
    >
      <g data-name='17'>
        <rect
          width='24'
          height='24'
          fill='none'
          transform='rotate(180 12 12)'
        />
        <path d='M9.84,14.72A.75.75,0,0,0,10.38,16a.74.74,0,0,0,.53-.22l3.25-3.25a.75.75,0,0,0,0-1.06L10.91,8.22a.77.77,0,0,0-1.07,0,.75.75,0,0,0,0,1.06L12.56,12Z' />
      </g>
    </svg>
  )
}

export function searchIcon(className?: string) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      class={className}
    >
      <path
        fill-rule='evenodd'
        d='M14.1922 15.6064C13.0236 16.4816 11.5723 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5723 16.4816 13.0236 15.6064 14.1922L20.7782 19.364C21.1687 19.7545 21.1687 20.3877 20.7782 20.7782C20.3876 21.1687 19.7545 21.1687 19.364 20.7782L14.1922 15.6064ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z'
        clip-rule='evenodd'
      />
    </svg>
  )
}
