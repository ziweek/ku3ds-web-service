import TypedJS from "wc-typed-js";

export default function Test() {
  return (
    <>
      <div>
        <wc-typed-js strings="John', 'James">
          <h1>
            Hey <span class="typing"></span>
          </h1>
        </wc-typed-js>
      </div>
    </>
  );
}
