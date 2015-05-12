CarrierWave.configure do |config|
  config.storage = :aws
  config.aws_bucket = "collegium"
  config.aws_acl = :public_read
  config.asset_host = "http://localhost:3000"

  config.aws_credentials = {
    access_key_id: ENV["pusher_s3_key"],
    secret_access_key: ENV["pusher_s3_secret"]
  }

end


