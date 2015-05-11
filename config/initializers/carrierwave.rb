CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider => "AWS",
    :aws_access_key_id => ENV["pusher_s3_key"],
    :aws_secret_access_key => ENV["pusher_s3_secret"]
  }
  config.fog_directory = "collegium"  
end