class TasksController < ApplicationController

	def index
		@tasks = Task.all.order(created_at: :asc)
		@task = Task.new
	end


	def create
		@tasks = Task.all
		@task = Task.new(task_params)
    	if @task.save
      		render @task 
   		end
	end

	def update
		task = Task.find(params[:id])
		task.update(completed: !task.completed)
		redirect_to root_path
	end

	def destroy
		task = Task.find(params[:id])
		task.destroy
		redirect_to root_path
	end

	def active
		@tasks = Task.active
		@task = Task.new
		render 'index'
	end

	def completed
		@tasks = Task.completed
		@task = Task.new
		render 'index'
	end

	def destroy_completed
		@tasks = Task.completed
		@tasks.each do |task|
			task.destroy
		end
		redirect_to root_path
	end

	private
    def task_params
      params.require(:task).permit(:description, :completed)
    end
end
