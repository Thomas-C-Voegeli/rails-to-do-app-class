class Task < ActiveRecord::Base
	validates :description, presence: true, length: { minimum: 6 }

	def self.active 
		self.all.where(completed: false)
	end

	def self.completed
		self.all.where(completed: true)
	end
end
