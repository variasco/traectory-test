import path from "path";

const resolvePath = (p: string) => path.resolve(__dirname, p);

const config = {
  webpack: {
    alias: {
      app: resolvePath("./src/app"),
      pages: resolvePath("./src/pages"),
      shared: resolvePath("./src/shared"),
      widgets: resolvePath("./src/widgets"),
      features: resolvePath("./src/features"),
      entities: resolvePath("./src/entities"),
    },
  },
};

export default config;
