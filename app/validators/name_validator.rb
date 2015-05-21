class NameValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    unless value =~ /\A[^0-9`!@#\$%\^&*+_=]+\z/i
      record.errors[attribute] << (options[:message] || "that is not a proper name")
    end
  end
end