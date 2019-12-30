import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../resources/scss/loading.scss'

export default function Loading({isLoading, message}) {

    return (
        <div className="loading">
            {isLoading && <CircularProgress className="center" />}
            <h4>{message}</h4>
        </div>
    );
}