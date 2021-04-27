import React, { useEffect } from 'react';
import { Snackbar, Button } from '@material-ui/core';
// import * as serviceWorker from '../serviceWorker';
import * as serviceWorker from './serviceWorkerRegistration';
import Slide from '@material-ui/core/Slide';



const ServiceWorkerWrapper = () => {
    const [showReload, setShowReload] = React.useState(false);
    const [waitingWorker, setWaitingWorker] = React.useState(null);

    const onSWUpdate = (registration) => {
        setShowReload(true);
        setWaitingWorker(registration.waiting);
    };
    useEffect(() => {
        serviceWorker.register({ onUpdate: onSWUpdate });
    }, []);

    const reloadPage = () => {
        waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
        setShowReload(false);
        window.location.reload();
    };
    //--------------------------------------
    function TransitionDown(props) {
        return <Slide {...props} direction="down" />;
    }
    return (
        <Snackbar
            open={showReload}
            message="A new version is available!"
            onClick={reloadPage}
            TransitionComponent={TransitionDown}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            action={
                <Button
                    color="inherit"
                    size="small"
                    onClick={reloadPage}
                >
                    Reload
        </Button>
            }
        />
    )
}
export default ServiceWorkerWrapper