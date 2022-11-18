import "../../../styles/widgets/_arrows.scss";

const DownArrow = (props) => {
  const { onClick} = props;

  return (
    <div
      className={'arrow down'}
      role="button"
      onClick={onClick}
    >
      <span></span>
      <span></span>
    </div>
  );
};


export default DownArrow;