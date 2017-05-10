interface Process {
  env: {
    NODE_ENV: "development" | "production"
  }
}

declare const process: Process