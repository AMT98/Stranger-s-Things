import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const AlertMsg = (props) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="info" isOpen={visible} toggle={onDismiss}>
      Username or password you entered was incorrect.
    </Alert>
  );
}

export default AlertMsg;