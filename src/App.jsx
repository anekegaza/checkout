import "./App.css";
import CheckoutStepper from "./components/stepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide Your Contact Details.</div>,
    form: () => (
      <div className="form-area">
        {" "}
        <form id="form2">
          <input type="text" placeholder="LinkedIn" />
          <input type="text" placeholder="Github" />
          <input type="text" placeholder="Twitter" />
        </form>
      </div>
    ),
  },
  {
    name: "Shipping Info",
    Component: () => <div>Provide Your Shipping Details.</div>,
    form: () => (
      <div className="form-area">
        {" "}
        <form id="form2">
          <input type="text" placeholder="LinkedIn" />
          <input type="text" placeholder="Github" />
          <input type="text" placeholder="Twitter" />
        </form>
      </div>
    ),
  },
  {
    name: "Payment Info",
    Component: () => <div>Complete Payment for your order.</div>,
    form: () => (
      <div className="form-area">
        {" "}
        <form id="form2">
          <select>
            <option value="">Select Payment Option</option>
            <option value="">ATM</option>
            <option value="">Bank Transfer</option>
            <option value=""> Mobile USSD</option>
          </select>
          <input type="text" placeholder="Github" />
          <input type="text" placeholder="Twitter" />
        </form>
      </div>
    ),
  },
  {
    name: "Processed",
    Component: () => <div> Your Order has been processed.</div>,
    form: () => (
      <div className="form-area">
        {" "}
        <form id="form2">
          <input type="text" placeholder="LinkedIn" />
          <input type="text" placeholder="Github" />
          <input type="text" placeholder="Twitter" />
        </form>
      </div>
    ),
  },
];

function App() {
  return (
    <div className="container">
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
}

export default App;
