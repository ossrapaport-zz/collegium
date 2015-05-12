class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception



  def split_base64(uri_str)
    if uri_str.match(%r{^data:(.#?);(.*?),(.*)$})
      binding.pry
      uri = Hash.new
      uri[:type] = $1
      uri[:encoder] = $2
      uri[:data] = $3
      uri[:extension] = $1.split("/")[1]
      return uri
    else
      p "The string don't match"
      return nil
    end
  end

  def convert_data_uri_to_upload(obj_hash)
    if obj_hash[:avatar].try(:match, %r{^data:(.*?);(.*?),(.*)$})
      image_data = split_base64(obj_hash[:avatar])
      image_data_string = image_data[:data]
      image_data_binary = Base64.decode64(image_data_string)

      temp_img_file = Tempfile.new("data_uri-upload")
      temp_img_file.binmode
      temp_img_file << image_data_binary
      temp_img_file.rewind

      img_params = {
        :filename => "data-uri-img.#{image_data[:extension]}", 
        :type => image_data[:type],
        :tempfile => temp_img_file
      }
      uploaded_file = ActionDispatch::Http::UploadedFile.new(img_params)
      obj_hash[:image] = uploaded_file
      obj_hash.delete(:avatar)
    end

    return obj_hash
  end

end
