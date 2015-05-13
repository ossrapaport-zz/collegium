class PapersController < ApplicationController

  def index
    papers = Paper.all
    sorted = papers.order(:created_at)
    render json: papers
  end

  def show
    paper = Paper.find(params[:id])
    paper_data = {
     paper: paper,
     user: paper.user,
     tags: paper.tags
    }
    render json: paper_data
  end

  def create
    paper = Paper.new(paper_params)
    tagIDs = params[:tags]

    tagIDs.each do |tagID|
      tag = Tag.find(tagID)
      paper.tags << tag
    end

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
    paper_data = {
      paper: paper,
      user: paper.user,
      tags: paper.tags
    }
    render json: paper_data
  end

  def search
    tagIDs = params[:tags]
    tags_hash = Hash.new

    tagIDs.each do |tagID|
      tags_hash["id"] = tagID
    end

    papers = Paper.includes(:tags).where( :tags => tags_hash )
    render json: papers

  end

  private
  def paper_params
    params.permit(
      :title,
      :user_id,
      :attachment
    )
  end

end