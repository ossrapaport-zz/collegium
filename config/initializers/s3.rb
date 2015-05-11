S3 = Aws::S3::Resource.new(
  credentials: Aws::Credentials.new(ENV["pusher_s3_key"], ENV["pusher_s3_secret"]),
  region: "us-east-1"
)