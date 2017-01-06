require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    self.class_name.constantize
  end

  def table_name
    self.model_class.table_name
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    @foreign_key = options[:foreign_key] || "#{name.to_s.underscore}_id".to_sym
    @primary_key = options[:primary_key] || :id
    @class_name = options[:class_name] || name.to_s.camelcase
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    @foreign_key = options[:foreign_key] || "#{self_class_name.underscore}_id".to_sym
    @primary_key = options[:primary_key] || :id
    @class_name = options[:class_name] || name.to_s.camelcase.singularize
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    options = BelongsToOptions.new(name, options)

    foreign_key_val = send(options.foreign_key)
    self.model_class.where(options.primary_key => foreign_key_val.first)

    # belongs_to: person
    #   class_name: Person,
    #   foreign_key: person_id,
    #   primary_key: id
    # cat.person
    # define_method(name) do
    #   obj = DBConnection.execute(<<-SQL)
    #     SELECT
    #       *
    #     FROM
    #       #{options.table_name}
    #     WHERE
    #       #{options.primary_key} = #{options.foreign_key}
    #   SQL
    #
    #   options.model_class.new(obj.first)
    # end
  end

  def has_many(name, options = {})
    # ...
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
  end
end

class SQLObject
  extend Associatable
end
