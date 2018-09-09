import sendMessage from '../../lightwave_messenger';

export const register = (req, res) => {
    sendMessage('F*p', result => {
        res.status(200).json({success: true, message: 'Press the button on the LightwaveRF Link to complete registration'});
    });
};

export const triggerLight = ({params}, res) => {
    let status = params.on;

    if(status === 'dim'){
        status = `dP${params.dim}`
    }else if(status === 'on'){
        status = 1;
    }else{
        status = 0;
    };

    const code = `R${params.room}D${params.device}F${status}`;

    sendMessage(code, result => {
        console.log(result)
        res.status(200).json({success: true, 'message': result});
    });
}