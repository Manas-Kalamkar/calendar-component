type Props = {
    
    variant?:'green' | 'yellow' | 'red',
    /** some description*/ 
}
/**Some comment about my Light component*/

const Light  = ({variant = 'green'}: Props) => {
  return (
    <div style={{padding:50,background:variant,borderRadius:'50%',width:20 , height:20}} className='bg-green-500'></div>
  )
}

export default Light