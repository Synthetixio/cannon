import '@nomiclabs/hardhat-ethers';

import './tasks/cannon';
import './tasks/build';
import './tasks/publish';
import './subtasks/download';
import './subtasks/load-deploy';
import './subtasks/write-deployments';
import './type-extensions';

import { HardhatConfig, HardhatUserConfig } from 'hardhat/types';
import { extendConfig } from 'hardhat/config';

extendConfig((config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
  config.paths.deployments = userConfig.paths?.deployments ?? 'deployments';

  config.cannon = {
    registryEndpoint: userConfig.cannon?.registryEndpoint || 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',

    // TODO: grab default value from registry/deployments/${network}.json file
    registryAddress: userConfig.cannon?.registryAddress || '0xa7F19685A1970A84Da7212ed3D74Cc5237408813',

    publisherPrivateKey: userConfig.cannon?.publisherPrivateKey,

    ipfsConnection: userConfig.cannon?.ipfsConnection || {
      url: 'https://ipfs.infura.io:5001/api/v0',
    },
  };
});
