import React from 'react';
import Typography from '@mui/material/Typography';

type Props = {
    children?: React.ReactNode;
};

const Title: React.FC<Props> = (props) => {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
};

export default Title;
