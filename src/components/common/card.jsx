import colors from "@/css/colors.json"

export const Card = ({ children }) => {
    return (
        <div className= "rounded-lg" style={CardStyle}>
            {children}
        </div>
    )
}

const CardStyle = {
    flex: "1 1 auto",
    borderWidth:"2px",
    borderColor:colors["gator_blue"],
    backgroundColor:colors["gator_blue"],
    color:"#ffffff",
    padding:"30px",
    margin:"30px",
}