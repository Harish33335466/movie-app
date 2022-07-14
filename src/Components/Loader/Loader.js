import "./Loader.css";

export default function Loader(props) {
  return (
    //
    // <div class="lds-ring">
    //   <div></div>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    // </div>
    //
    <div>
      <div className="overlay"></div>

      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
