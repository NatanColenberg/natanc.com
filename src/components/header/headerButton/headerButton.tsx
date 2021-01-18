import "./headerButton.css";

interface Props {
  title: String;
  icon: any;
}

export default function HeaderButton(props: Props) {
  const { title, icon } = props;
  return (
    <div className="headerButtonWrap">
      <div className="headerButtonTitle">{title}</div>
    </div>
  );
}
