import * as grpc from '@grpc/grpc-js';
//var grpc = require('@grpc/grpc-js'); // 
import { PlayerServiceService } from './generated/player_grpc_pb';
import { BirdServiceService } from './generated/bird_grpc_pb';
import { RoostServiceService } from './generated/roost_grpc_pb';
import { playerService } from './services/player.service';
import { birdService } from './services/bird.service';
import { roostService } from './services/roost.service';

const server = new grpc.Server();

server.addService(
    PlayerServiceService as unknown as grpc.ServiceDefinition<grpc.UntypedServiceImplementation>,
    playerService as unknown as grpc.UntypedServiceImplementation
);

server.addService(
    BirdServiceService as unknown as grpc.ServiceDefinition<grpc.UntypedServiceImplementation>,
    birdService as unknown as grpc.UntypedServiceImplementation
);

server.addService(
    RoostServiceService as unknown as grpc.ServiceDefinition<grpc.UntypedServiceImplementation>,
    roostService as unknown as grpc.UntypedServiceImplementation
);

const PORT = 50051;
server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`Server running on port ${PORT}`);
    //server.start();
});
