interface Props {
  title: string;
  color?: string;
}

const Title = ({title, color}: Props) => {
  return (
    <div>
      <p style={{color: `${color ? color : 'green'}`}}>
        {title}
      </p>
    </div>
  )
}
export default Title
