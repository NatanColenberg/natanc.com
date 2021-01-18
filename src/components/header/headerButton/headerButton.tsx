import "./headerButton.css";

interface Props {
  title: String;
}

export default function HeaderButton(props: Props) {
  const { title } = props;
  return (
    <div className="headerButtonWrap">
      <div className="headerButtonTitle">{title}</div>
    </div>
  );
}
