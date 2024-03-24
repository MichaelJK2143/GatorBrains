import colors from "@/css/colors.json"

export const Card = ({ children }) => {
    return (
        <div className= "rounded-lg" style={Tstyle}>
            {children}
        </div>
    )
}

const Tstyle= {
        backgroundColor: 'lightblue',
        borderRadius: '10px',
        maxHeight: '400px',
        minHeight: '100px',
        minWidth: '200px', // Minimum width to ensure it grows sideways
        flexGrow: 1, // Allow it to grow to fill the screen sideways
        margin: '10px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }
