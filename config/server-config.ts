interface Config {
  port: number,
  google: {
    spreadsheet: {
      apiKey: string;
      sheetId: string;
    }
  }
}

class ServerConfig {
  private config: Config | undefined;

  public init(config :Config) {
    this.config = config;
  }

  public getPort(): number {
    return <number>this.config?.port;
  }

  public getGoogleSpreadsheetAPIKey(): string {
    return <string>this.config?.google.spreadsheet.apiKey;
  }

  public getGoogleSpreadsheetSheetId(): string {
    return <string>this.config?.google.spreadsheet.sheetId;
  }
}

export default new ServerConfig();
