const Label = ({ rating }) => {
  const labelText = {
    0: { text: 'no beenz', color: 'FF0000' },
    1: { text: 'no rhyme because garbage', color: '#000' },
    2: { text: 'blues', color: '#949599' },
    3: { text: 'fleas', color: '#2278B6' },
    4: { text: 'chores', color: '#F1D357' },
    5: { text: 'a life', color: '#FFF' },
  }

  return (
    <h1 style={{ color: labelText[rating]?.color }}>
      You have {labelText[rating]?.text}
    </h1>
  )
}

export default Label