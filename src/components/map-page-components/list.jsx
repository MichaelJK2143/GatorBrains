
export const Title = () => {
  const GatorTitle = {
    'fontSize':'60px',
    'color':'blue',
    'font-weight': 'bold'
  }
  const GatorSubTitle= {
    'fontSize':'30px'
  }
  return (
    <div>
      <h1 style={GatorTitle}>Gator Finder</h1>
      <h3 style={GatorSubTitle}>find your study Buddy</h3>
    </div>
  )
}

export const User= () =>{
  const Userlist ={
    'align-self' : 'flex-end',
    'margin' : 'auto',
    'width' : '90%',
    'border' : '3px solid black',
    'border-radius' :'30px',
    'background-color':"lightgray",
    'height':'400px'
  }
  const UserTitle ={
    'fontSize':'20px',
    'color' : 'red'
  } 
  const UserName ={
    'fontSize' : '15px',
    'padding' : '10px'
  }

  return (
  <div style={Userlist}>
    <h2 style ={UserTitle}>Active User</h2>
    <ul>
      <li style={UserName}>User1</li>
      <li style={UserName}>User2</li>
      <li style={UserName}>User3</li>
      <li style={UserName}>User4</li>
      <li style={UserName}>User5</li>
    </ul>
  </div>
  )
}

export const MapPlaceholder = () => {
  const h1_style ={
    'fontSize':'25px',
    'margin' : 'auto'
  }
  const MapBorder = {
    'border' : '3px solid black',
    'border-radius' :'30px',
    'width':'90%',
    'background-color':'lightgrey',
    'height':'400px'

  }

  return (
    <div style ={MapBorder}>
        <h1 style={h1_style}> hi </h1>
        <img src="/src/images/1st-Floor-Map-Marston.png" alt="Marston basement map"></img>
        <p>"nim dolor nec est. Cras vel suscipit lectus. Fusce nec metus at tortor sodales lobortis. Maecenas tincidunt leo at magna ultricies, at laoreet velit lobortis. Donec lacinia eros et posuere sollicitudin. Integer tempus, nulla eget interdum varius, mauris arcu pellentesque dolor, nec tempor odio eros id lorem. Integer sit amet aliquet nulla. Sed tempus, odio id pharetra faucibus, metus sapien egestas libero, et elementum risus elit eget purus. Duis nec mauris at magna bibendum viverra."</p>
    </div>
  )
}