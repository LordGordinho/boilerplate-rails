# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    flash[:notice] = { type: "success", message: "Welcome to the Home Page!" }
  end
end
