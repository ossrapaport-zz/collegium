class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.paper_id = params[:paper_id].to_i
    if @comment.save
      render json: @comment
    else
      render json: { errors: @comment.errors.full_messages }, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: {errors: @comment.errors.full_messages }, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: @comment
  end

  private

  def comment_params
    params.require(:comment).permit(
      :text,
      :user_id
    )
  end
end