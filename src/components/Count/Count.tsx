import "./Count.css";

const Count = (props: any) => {
  const { totalCount } = props;
  if (!totalCount) {
    return null;
  }
  return <div className="count">Issues count: {totalCount}</div>;
};

export default Count;
