## Transforms - Stacked cards

```
import "./styles.css";

const LENGTH = 3;

export default function StackedComponent() {
return (

<div className="wrapper">
{new Array(LENGTH).fill(0).map((\_, i) => (
<div className="card" key={i} style={{ "--index": LENGTH - 1 - i }}>
<span>{LENGTH - 1 - i}</span>
</div>
))}
</div>
);
}
```

```
.wrapper {
display: grid;
}

.card {
width: 356px;
height: 74px;
box-shadow: 0 4px 12px #0000001a;
border: 1px solid #eeeeee;
background: white;
border-radius: 8px;
grid-area: 1 / 1;
transform:
translateY(calc(var(--index) _ -10%))
scale(calc(1 - var(--index) _ 0.05 ))
}
```

## Transitions - Hover circle

```
import "./styles.css";

export default function SimpleTransformTransition() {
return (
<div className="box">
<div className="box-inner" />
</div>
);
}
```

```
.box-inner {
  height: 56px;
  width: 56px;
  background: #fad655;
  border-radius: 50%;
  transition: transform .2s ease;
}

.box:hover {
  cursor: pointer;
}

.box:hover .box-inner{
  transform: translateY(-20%);
}
```

## Transitions - Card hover

```
import "./styles.css";

export default function CardHover() {
  return (
     <a href="#" className="card">
        <div className="card-description">
          <h3 className="card-title">Project name</h3>
          <p className="card-subtitle">Project description</p>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            className="card-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.33333 0.4375C6.33333 0.195877 6.52922 0 6.77083 0H10.5625C10.8041 0 11 0.195877 11 0.4375V4.22917C11 4.47078 10.8041 4.66667 10.5625 4.66667C10.3209 4.66667 10.125 4.47078 10.125 4.22917V1.49372L7.08017 4.53851C6.90932 4.70937 6.63235 4.70937 6.46149 4.53851C6.29063 4.36765 6.29063 4.09068 6.46149 3.91981L9.50626 0.875H6.77083C6.52922 0.875 6.33333 0.679122 6.33333 0.4375ZM0.5 6.27083C0.5 6.02922 0.695877 5.83333 0.9375 5.83333C1.17912 5.83333 1.375 6.02922 1.375 6.27083V9.00626L4.41981 5.96149C4.59068 5.79063 4.86765 5.79063 5.03851 5.96149C5.20937 6.13235 5.20937 6.40932 5.03851 6.58017L1.99372 9.625H4.72917C4.97078 9.625 5.16667 9.82088 5.16667 10.0625C5.16667 10.3041 4.97078 10.5 4.72917 10.5H0.9375C0.695877 10.5 0.5 10.3041 0.5 10.0625V6.27083Z"
              fill="#58585F"
            />
          </svg>
        </div>
      </a>
  );

```

```
.card {
  width: 340px;
  height: 340px;
  overflow: hidden;
  border-radius: 16px;
  background: #fff;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  box-shadow:
    0px 0px 0px 1px rgba(9, 9, 11, 0.08),
    0px 1px 2px -1px rgba(9, 9, 11, 0.08),
    0px 2px 4px 0px rgba(9, 9, 11, 0.04);
}

.card-description {
  --margin: 6px;
  border-radius: 12px;
  border: 1px solid #fff;
  position: relative;
  background: #fafafa;
  margin: var(--margin);
  width: 100%;
  padding: 10px 14px 13px;
  font-size: 13px;
  box-shadow:
    0px 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 1px 2px -1px rgba(0, 0, 0, 0.08),
    0px 2px 4px 0px rgba(0, 0, 0, 0.04);

  transform: translateY(calc(100% + var(--margin) + 1px));
  transition: transform 500ms cubic-bezier(.19, 1, .22, 1);
  /* transition: transform 250ms ease; */
}

.card:hover, .card:focus-visible {
  .card-description {
  transform: translateY(0);
}

.card-icon {
  position: absolute;
  top: 16px;
  right: 16px;
}

.card-title {
  color: #1b1b1d;
  font-weight: 500;
}

.card-subtitle {
  color: #717175;
  line-height: 1;
  margin-top: 4px;
}
```

## Transitions - Download arrow

```
import "./styles.css";

export default function DownloadArrow() {
  return (
    <button aria-label="Download PDF" className="download-button">
      {ArrowDown}
      {ArrowDown}
    </button>
  );
}

const ArrowDown = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

```

```
:root {
  --easing: cubic-bezier(0.77, 0, 0.175, 1);
  --duration: 250ms;
}

.download-button {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.04);
  background: #fff;
  display: grid;
  place-items: center;
  overflow: hidden;
}

svg {
  grid-area: 1/1;
  transition: transform 250ms cubic-bezier(0.77, 0, 0.175, 1);
}

svg:first-of-type {
  transform: translateY(-150%);
}

.download-button:hover {
  svg:first-of-type {
    transform: translateY(0%);
  }

  svg:last-of-type {
    transform: translateY(150%);
  }
}

```

## Transitions - Toast component

```
import "./styles.css";
import { useState, useEffect } from "react";

export default function Toaster() {
  const [toasts, setToasts] = useState(0);

  return (
    <div className="wrapper">
      <div className="toaster">
        {Array.from({ length: toasts }).map((_, i) => (
          <Toast key={i} index={toasts - i - 1} />
        ))}
      </div>
      <button
        className="button"
        onClick={() => {
          setToasts(toasts + 1);
        }}
      >
        Add toast
      </button>
    </div>
  );
}

function Toast({ index }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="toast" style={{ "--index": index }} data-mounted={mounted}>
      <span className="title">Event Created </span>
      <span className="description">Monday, January 3rd at 6:00pm</span>
    </div>
  );
}

```

```
.toast {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 14px 13px;
  width: 100%;
  font-size: 13px;
  border-radius: 8px;
  box-shadow:
    0px 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 1px 2px -1px rgba(0, 0, 0, 0.08),
    0px 2px 4px 0px rgba(0, 0, 0, 0.04);

  position: absolute;
  bottom: 0;
  opacity: 0;
  transform: translateY(100%);
  transition: 400ms ease;
  transition-properties: opacity, transform;
}

.toast[data-mounted="true"] {
  opacity: 1;
  transform: translateY(calc(var(--index) * -120%));
}

.title {
  font-weight: 500;
  color: #1b1b1d;
}

.description {
  font-weight: normal;
  line-height: 1;
  color: #717175;
}

.toaster {
  position: absolute;
  left: 50%;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  width: 356px;
  transform: translateX(-50%);
  --gap: 16px;
}

.button {
  position: relative;
  display: inline-block;
  margin-top: auto;
  padding-inline: 12px;
  width: auto;
  height: 32px;
  font-size: 14px;
  font-weight: 500;
  background: #fff;
  border-radius: 9999px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.04);
}

.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 24px;
  height: 100%;
}
```
