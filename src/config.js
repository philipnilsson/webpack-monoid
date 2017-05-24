
export default class LoaderConfig {

    constructor(loaders) {
        this.loaders = loaders;
    }

    into(other) {
        return new LoaderConfig(
            this.loaders.concat(other.loaders)
        );
    }

    makeConfig() {
        return {
            module: {
                rules: {
                    use: this.loaders
                }
            }
        };
    }
}
