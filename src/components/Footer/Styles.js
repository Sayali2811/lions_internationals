import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    footer: {
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%'
    },
    socialIcons: {
        textAlign: 'center',
        '& a': {
            color: '#fff',
            // margin: '10px',
            fontSize:"1.5rem",
        padding:'1rem',
        borderRadius:"1rem",
        },
        

        '& a:hover ': {
            backgroundColor: 'rgba(4,27,59,0.6)',}

    },
}))