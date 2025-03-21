import React from "react";

interface Props {
  onClick: () => void;
}

const SubmitButton = ({ onClick }: Props) => {
  //const [buttonClicked, setButtonClicked] = useState(false)
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      Click Me
    </button>
  );
};

export default SubmitButton;
