# Usage

SharedObjectGet retrieves a reference to an object that was created with SharedObjectRegister.



You can use a shared object on a PowerBuilder client to simulate an asynchronous call to the server. The main thread on the client makes an asynchronous call to a function on the shared object, passing it a callback object that is notified when processing has finished on the server. The method on the shared object makes a synchronous call to the server component method that performs processing. Since the shared object is running in a separate thread on the client, the main thread on the client can proceed with other work while the process runs on the server.
