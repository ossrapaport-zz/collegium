class PapersController < ApplicationController

  def index
    papers = Paper.all
    render json: papers
  end

  def show
    paper = Paper.find(params[:id])
    paper_data = {
     paper: paper,
     user: paper.user
    }
    render json: paper_data
  end

  def create
    paper = Paper.new(paper_params)
    binding.pry
    if paper.save
      render json: paper
    else
      render json: { errors: paper.errors.full_messages}, status: 422
    end
  end

  def update
    paper = Paper.find(params[:id])
    if paper.update(paper_params)
      render json: paper
    else
      render json: { errors: paper.errors.full_messages}, status: 422
    end
  end

  def review
    paper = Paper.find(params[:id])
    paper.review_count = paper.review_count + 1
    paper.save
    render json: paper
  end

  def upvote
    paper = Paper.find(params[:id])
    paper.rating = paper.rating + 1
    paper.save
    render json: paper
  end

  private
  def paper_params
    params.permit(
      :title,
      :user_id,
      :avatar
    )
  end

end