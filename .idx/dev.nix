{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.yarn
  ];
  idx.extensions = [
    
  ];
  idx.previews = {
    previews = [
      {
        command = [
          "yarn"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        id = "web";
        manager = "web";
      }
      {
        id = "web";
        manager = "web";
      }
    ];
  };
}