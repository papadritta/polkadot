initSidebarItems({"enum":[["Client","A client instance of Polkadot."],["DatabaseSource","Where to find the database.."],["Error",""],["ExecutionStrategy","Strategy for executing a call into the runtime."],["Handle","A handle used to communicate with the `Overseer`."],["IsCollator","Is this node a collator?"],["PruningMode","Pruning mode."],["Role","Role of the local node."],["SubstrateServiceError","Service errors."]],"fn":[["build_full",""],["create_default_subsystems","Create a default, unaltered set of subsystems."],["new_chain_ops","Builds a new object suitable for chain operations."],["new_full","Create a new full node of arbitrary runtime and executor."]],"mod":[["chain_spec","Polkadot chain configurations."],["generic","Generic implementations of Extrinsic/Header/Block."],["runtime_traits","Primitives for the runtime modules."]],"struct":[["ApiRef","Auxiliary wrapper that holds an api instance and binds it to the given lifetime."],["BlakeTwo256","Blake2-256 Hash implementation."],["Configuration","Service configuration."],["KusamaExecutorDispatch","The native executor instance for Kusama."],["LongestChain","Implement Longest Chain Select implementation where ‘longest’ is defined as the highest number of blocks"],["NewFull",""],["Overseer","The overseer."],["OverseerGenArgs","Arguments passed for overseer construction."],["ParaId","Unique identifier of a parachain."],["PolkadotExecutorDispatch","The native executor instance for Polkadot."],["PrometheusConfig","Configuration of the Prometheus endpoint."],["Proposal","A proposal that is created by a [`Proposer`]."],["RealOverseerGen","The regular set of subsystems."],["RococoExecutorDispatch","The native executor instance for Rococo."],["TaskManager","Helper struct to manage background/async tasks in Service."],["TransactionPoolOptions","Pool configuration options."],["WestendExecutorDispatch","The native executor instance for Westend."]],"trait":[["AbstractClient","Trait that abstracts over all available client implementations."],["AuthorityDiscoveryApi","The authority discovery api."],["AuxStore","Provides access to an auxiliary database."],["BabeApi","API necessary for block authorship with BABE."],["Backend","Client backend."],["BlockImport","Block import trait."],["BlockT","Something which fulfills the abstract idea of a Substrate block. It has types for `Extrinsic` pieces of information as well as a `Header`."],["CallExecutor","Method call executor."],["Chain","A type which provides access to chain information."],["ChainSpec","Common interface of a chain specification."],["ClientHandle","A handle to a Polkadot client instance."],["ConstructRuntimeApi","Something that can be constructed to a runtime api."],["CoreApi","The `Core` runtime api that every Substrate runtime needs to implement."],["ExecuteWithClient","Execute something with the client instance."],["HeaderBackend","Blockchain database header backend. Does not perform any validation."],["HeaderProvider","Provides the header and block number for a hash."],["HeaderProviderProvider","Decoupling the provider."],["HeaderT","Something which fulfills the abstract idea of a Substrate header. It has types for a `Number`, a `Hash` and a `Hashing`. It provides access to an `extrinsics_root`, `state_root` and `parent_hash`, as well as a `digest` and a block `number`."],["IdentifyVariant","Can be called for a `Configuration` to identify which network the configuration targets."],["NativeExecutionDispatch","Delegate for dispatching a CodeExecutor call."],["OverseerGen","Trait for the `fn` generating the overseer."],["ParachainHost","The API for querying the state of parachains on-chain."],["ProvideRuntimeApi","Something that provides a runtime api."],["RuntimeApiCollection","A set of APIs that polkadot-like runtimes must implement."],["RuntimeGenesis","A set of traits for the runtime genesis config."],["SelectChain","The SelectChain trait defines the strategy upon which the head is chosen if multiple forks are present for an opaque definition of “best” in the specific chain build."],["SpawnNamed","Something that can spawn tasks (blocking and non-blocking) with an assigned name."],["StateBackend","A state backend is used to read state data and can have changes committed to it."]],"type":[["Block","Block type."],["BlockId","Block ID."],["CollatorPair","A Parachain collator keypair."],["DigestFor","Extract the digest type for a block."],["FullBackend",""],["FullClient",""],["Hash","A hash of some data used by the relay chain."],["HashFor","Extract the hashing type for a block."],["NumberFor","Extract the number type for a block."],["OverseerHandle","Handle for an overseer."],["TFullBackend","Full client backend type."],["TFullCallExecutor","Full client call executor type."],["TFullClient","Full client type."],["TLightBackend","Light client backend type."],["TLightCallExecutor","Light call executor type."],["TLightClient","Light client type."]]});