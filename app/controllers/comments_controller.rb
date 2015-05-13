class CommentsController < ApplicationController

  def index
    paper = Paper.find(params[:paper_id])
    comments = paper.comments
    comments_data = comments.map do |comment|
      hash = {:comment => comment}
      hash[:user] = comment.user
      hash
    end

    render json: comments_data
  end

  def create
    comment = Comment.new(comment_params)
    comment.paper_id = params[:paper_id].to_i
    if comment.save
      comment_data = {:comment => comment}
      comment_data[:user] = comment.user
      render json: comment_data
    else
      render json: { errors: comment.errors.full_messages }, status: 422
    end
  end

  def update
    comment = Comment.find(params[:id])
    if comment.update(comment_params)
      render json: comment
    else
      render json: {errors: comment.errors.full_messages }, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end

  private

  def comment_params
    params.permit(
      :text,
      :paper_id,
      :user_id
    )
  end
end